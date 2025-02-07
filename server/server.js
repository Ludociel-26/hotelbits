import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

import connectDB, { sequelize } from './config/postgresdb.js';
import authRouter from './routes/authRoutes.js'
import userRouter from "./routes/userRoutes.js";

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

// Middleware para manejar errores de JSON mal formateado
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
        return res.status(400).json({ success: false, message: "Invalid JSON format" });
    }
    next();
});

// API Endpoints
app.get('/', (req, res) => res.send("API Working fine"));
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

app.listen(port, () => console.log(`Server started on PORT:${port}`));