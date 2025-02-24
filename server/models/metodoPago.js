import { DataTypes } from 'sequelize';
import { sequelize } from '../config/postgresdb.js';

const MetodoPago = sequelize.define('MetodoPago', {
    metodo_pago_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    metodo: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }
});

export default MetodoPago;