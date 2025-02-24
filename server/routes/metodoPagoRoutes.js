import express from 'express';
import { createMetodoPago, getMetodosPago, getMetodoPagoById, updateMetodoPago, deleteMetodoPago } from '../controllers/metodoPagoController.js';

const router = express.Router();

router.post('/', createMetodoPago); // Crear un método de pago
router.get('/', getMetodosPago); // Obtener todos los métodos de pago
router.get('/:id', getMetodoPagoById); // Obtener un método de pago por ID
router.put('/:id', updateMetodoPago); // Actualizar un método de pago
router.delete('/:id', deleteMetodoPago); // Eliminar un método de pago

export default router;