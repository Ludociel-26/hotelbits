import { DataTypes } from 'sequelize';
import { sequelize } from '../config/postgresdb.js';

const EstadoReserva = sequelize.define('EstadoReserva', {
    estado_reserva_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    estado: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }
});

export default EstadoReserva;