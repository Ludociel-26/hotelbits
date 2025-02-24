import express from 'express';
import { createEstadoReserva, getEstadosReserva, getEstadoReservaById, updateEstadoReserva, deleteEstadoReserva } from '../controllers/estadoReservaController.js';

const router = express.Router();

router.post('/', createEstadoReserva); // Crear un estado de reserva
router.get('/', getEstadosReserva); // Obtener todos los estados de reserva
router.get('/:id', getEstadoReservaById); // Obtener un estado de reserva por ID
router.put('/:id', updateEstadoReserva); // Actualizar un estado de reserva
router.delete('/:id', deleteEstadoReserva); // Eliminar un estado de reserva

export default router;
