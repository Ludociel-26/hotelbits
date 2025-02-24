import { DataTypes } from 'sequelize';
import { sequelize } from '../config/postgresdb.js';
import Piso from './piso.js';
import TipoHabitacion from './tipoHabitacion.js';
import EstadoHabitacion from './estadoHabitacion.js';  

const Habitacion = sequelize.define('Habitacion', {
    habitacion_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    numero: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    tarifa_base: {
        type: DataTypes.DECIMAL(12, 2),
        allowNull: false
    },
    max_personas: {
        type: DataTypes.SMALLINT,
        defaultValue: 2
    }
});

Habitacion.belongsTo(Piso, { foreignKey: 'piso_id' });
Habitacion.belongsTo(TipoHabitacion, { foreignKey: 'tipo_habitacion_id' });
Habitacion.belongsTo(EstadoHabitacion, { foreignKey: 'estado_habitacion_id' });

export default Habitacion;