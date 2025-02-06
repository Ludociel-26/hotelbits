import Sequelize from 'sequelize';

const sequelize = new Sequelize(process.env.POSTGRES_URI, {
    dialect: 'postgres',
    logging: false, // Puedes habilitar el logging si lo deseas
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("Database Connected");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};

// Exportar la instancia de sequelize
export { sequelize };

// Exportar la función connectDB por defecto
export default connectDB;
/*
// The connectDB function is an async function that connects to the database using MongoDB.
import mongoose from "mongoose";

const connectDB = async ()=>{

    mongoose.connection.on('connected', ()=>console.log("Database Connected"));

    await mongoose.connect(`${process.env.MONGODB_URI}`);
};

export default connectDB;
*/