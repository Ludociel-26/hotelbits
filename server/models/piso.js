import { DataTypes } from 'sequelize';
import { sequelize } from '../config/postgresdb.js';

const Piso = sequelize.define('Piso', {
    piso_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    numero_piso: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false
    },
    max_habitaciones: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

export default Piso;