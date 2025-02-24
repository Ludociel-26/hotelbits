import express from 'express';
import { createEstadoHabitacion, getEstadosHabitacion, getEstadoHabitacionById, updateEstadoHabitacion, deleteEstadoHabitacion } from '../controllers/estadoHabitacionController.js';

const router = express.Router();

router.post('/', createEstadoHabitacion); // Crear un estado de habitación
router.get('/', getEstadosHabitacion); // Obtener todos los estados de habitación
router.get('/:id', getEstadoHabitacionById); // Obtener un estado de habitación por ID
router.put('/:id', updateEstadoHabitacion); // Actualizar un estado de habitación
router.delete('/:id', deleteEstadoHabitacion); // Eliminar un estado de habitación

export default router;