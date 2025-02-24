import express from 'express';
import { createReserva, getReservas, getReservaById, updateReserva, deleteReserva } from '../controllers/reservaController.js';

const router = express.Router();

router.post('/', createReserva); // Crear una reserva
router.get('/', getReservas); // Obtener todas las reservas
router.get('/:id', getReservaById); // Obtener una reserva por ID
router.put('/:id', updateReserva); // Actualizar una reserva
router.delete('/:id', deleteReserva); // Eliminar una reserva

export default router;