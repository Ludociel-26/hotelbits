import { DataTypes } from 'sequelize';
import { sequelize } from '../config/postgresdb.js';
import Habitacion from './habitacion.js';
import User from './userModel.js';
import EstadoReserva from './estadoReserva.js';
import MetodoPago from './metodoPago.js';

const Reserva = sequelize.define('Reserva', {
    reserva_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    fecha_entrada: {
        type: DataTypes.DATE,
        allowNull: false
    },
    fecha_salida: {
        type: DataTypes.DATE,
        allowNull: false
    },
    total_pagado: {
        type: DataTypes.DECIMAL(12,2),
        allowNull: true
    }
});

Reserva.belongsTo(User, { foreignKey: 'user_id' });
Reserva.belongsTo(Habitacion, { foreignKey: 'habitacion_id' });
Reserva.belongsTo(EstadoReserva, { foreignKey: 'estado_reserva_id' });
Reserva.belongsTo(MetodoPago, { foreignKey: 'metodo_pago_id' });

export default Reserva;