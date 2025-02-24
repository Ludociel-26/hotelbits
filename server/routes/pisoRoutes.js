import express from 'express';
import { createPiso, getPisos, getPisoById, updatePiso, deletePiso } from '../controllers/pisoController.js';

const router = express.Router();

router.post('/', createPiso); // Crear un piso
router.get('/', getPisos); // Obtener todos los pisos
router.get('/:id', getPisoById); // Obtener un piso por ID
router.put('/:id', updatePiso); // Actualizar un piso
router.delete('/:id', deletePiso); // Eliminar un piso

export default router;