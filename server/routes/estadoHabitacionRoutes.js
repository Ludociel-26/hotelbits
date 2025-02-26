import express from 'express';
import userAuth from '../middleware/userAuth.js';
import requireRole from '../middleware/requireRole.js';
import { createEstadoHabitacion, getEstadosHabitacion, getEstadoHabitacionById, updateEstadoHabitacion, deleteEstadoHabitacion } from '../controllers/estadoHabitacionController.js';

const router = express.Router();

// Ejemplo para crear un estado de habitación, accesible solo para recepcionistas (rol 2)
router.post('/', userAuth, requireRole([2]), async (req, res, next) => {
  try {
    await createEstadoHabitacion(req, res);
    return res.json({ success: true, message: "Estado de Habitación Creada" });
  } catch (error) {
    next(error);
  }
});

// Otras rutas también protegidas de forma similar:
router.get('/', userAuth, requireRole([2]), async (req, res, next) => {
  try {
    await getEstadosHabitacion(req, res);
    return res.json({ success: true, message: "Obteniendo estados de Habitaciones" });
  } catch (error) {
    next(error);
  }
});

router.get('/:id', userAuth, requireRole([2]), async (req, res, next) => {
  try {
    await getEstadoHabitacionById(req, res);
    return res.json({ success: true, message: "Obteniendo un estado de Habitación por ID" });
  } catch (error) {
    next(error);
  }
});

router.put('/:id', userAuth, requireRole([2]), async (req, res, next) => {
  try {
    await updateEstadoHabitacion(req, res);
    return res.json({ success: true, message: "Estado de habitación actualizado" });
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', userAuth, requireRole([2]), async (req, res, next) => {
  try {
    await deleteEstadoHabitacion(req, res);
    return res.json({ success: true, message: "Estado de habitación eliminado" });
  } catch (error) {
    next(error);
  }
});

export default router;