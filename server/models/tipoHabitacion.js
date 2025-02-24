import { DataTypes } from 'sequelize';
import { sequelize } from '../config/postgresdb.js';

const TipoHabitacion = sequelize.define('TipoHabitacion', {
    tipo_habitacion_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    tipo: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }
});

export default TipoHabitacion;