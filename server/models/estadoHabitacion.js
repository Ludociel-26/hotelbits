import { DataTypes } from 'sequelize';
import { sequelize } from '../config/postgresdb.js';

const EstadoHabitacion = sequelize.define('EstadoHabitacion', {
    estado_habitacion_id: {
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

export default EstadoHabitacion;