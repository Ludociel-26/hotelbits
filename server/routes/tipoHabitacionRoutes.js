import express from 'express';
import { createTipoHabitacion, getTiposHabitacion, getTipoHabitacionById, updateTipoHabitacion, deleteTipoHabitacion } from '../controllers/tipoHabitacionController.js';

const router = express.Router();

router.post('/', createTipoHabitacion); // Crear un tipo de habitación
router.get('/', getTiposHabitacion); // Obtener todos los tipos de habitación
router.get('/:id', getTipoHabitacionById); // Obtener un tipo de habitación por ID
router.put('/:id', updateTipoHabitacion); // Actualizar un tipo de habitación
router.delete('/:id', deleteTipoHabitacion); // Eliminar un tipo de habitación

export default router;