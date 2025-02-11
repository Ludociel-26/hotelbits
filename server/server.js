import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import 'dotenv/config';
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

import connectDB, { sequelize } from './config/postgresdb.js';
import authRouter from './routes/authRoutes.js'
import userRouter from "./routes/userRoutes.js";
import logger from "./logger.js";

const app = express();
const port = process.env.PORT || 4000;

// Conectar a la base de datos y sincronizar modelos
connectDB().then(() => {
    sequelize.sync();  // Llamar a sync() en la instancia sequelize, no en la clase Sequelize
    console.log('Database synced');
});

const allowedOrigins = ['http://localhost:5173']

app.use(express.json());
app.use(bodyParser.json()); // Asegura que el cuerpo de la solicitud sea JSON
app.use(cookieParser());
app.use(cors({ origin: allowedOrigins, credentials: true}));
// ✅ Helmet para seguridad HTTP
app.use(helmet());

// Lista para almacenar IPs bloqueadas
const blockedIPs = new Set();

// Función para obtener la IP real del usuario y normalizar IPv6 a IPv4
const getClientIP = (req) => {
    let ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    if (ip.includes(',')) ip = ip.split(',')[0]; // En caso de múltiples IPs en X-Forwarded-For
    return ip.replace(/^::ffff:/, ''); // Convierte IPv6 a IPv4
};

// Middleware para bloquear IPs
app.use((req, res, next) => {
    const ip = getClientIP(req);
    if (blockedIPs.has(ip)) {
        logger.warn(`⛔ Bloqueo de solicitud de IP: ${ip}`);
        return res.status(403).json({ success: false, message: "Acceso denegado." });
    }
    next();
});

// ✅ express-rate-limit para limitar solicitudes
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minuto
    max: 150, // Máximo 150 solicitudes por IP
    handler: (req, res) => {
        const ip = getClientIP(req);
        blockedIPs.add(ip); // Agrega la IP a la lista de bloqueadas
        logger.warn(`⚠️ IP bloqueada por exceso de solicitudes: ${ip}`);
        res.status(429).json({ success: false, message: "Demasiadas solicitudes, intente más tarde." });
    },
    standardHeaders: true, 
    legacyHeaders: false 
});

app.use(limiter); // ✅ Aplica el límite a TODAS las rutas

// Middleware para errores de JSON mal formateado
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
        console.log('Invalid JSON format');
        return res.status(400).json({ success: false, message: "Invalid JSON format" });
    }
    next();
});

// API Endpoints
app.get('/', (req, res) => res.send("API Working fine"));
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

app.listen(port, () => logger.info(`🚀 Server started on PORT:${port}`));