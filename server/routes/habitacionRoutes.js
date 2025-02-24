import express from 'express';
import { createHabitacion, getHabitaciones, getHabitacionById, updateHabitacion, deleteHabitacion } from '../controllers/habitacionController.js';

const router = express.Router();

router.post('/', createHabitacion); // Crear una habitación
router.get('/', getHabitaciones); // Obtener todas las habitaciones
router.get('/:id', getHabitacionById); // Obtener una habitación por ID
router.put('/:id', updateHabitacion); // Actualizar una habitación
router.delete('/:id', deleteHabitacion); // Eliminar una habitación

export default router;