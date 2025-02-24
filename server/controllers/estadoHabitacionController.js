import EstadoHabitacion from '../models/estadoHabitacion.js';

export const createEstadoHabitacion = async (req, res) => {
    try {
        const estadoHabitacion = await EstadoHabitacion.create(req.body);
        res.status(201).json(estadoHabitacion);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getEstadosHabitacion = async (req, res) => {
    try {
        const estados = await EstadoHabitacion.findAll();
        res.status(200).json(estados);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getEstadoHabitacionById = async (req, res) => {
    try {
        const estadoHabitacion = await EstadoHabitacion.findByPk(req.params.id);
        if (!estadoHabitacion) return res.status(404).json({ message: 'Estado de habitación no encontrado' });
        res.status(200).json(estadoHabitacion);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateEstadoHabitacion = async (req, res) => {
    try {
        const estadoHabitacion = await EstadoHabitacion.findByPk(req.params.id);
        if (!estadoHabitacion) return res.status(404).json({ message: 'Estado de habitación no encontrado' });
        await estadoHabitacion.update(req.body);
        res.status(200).json(estadoHabitacion);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteEstadoHabitacion = async (req, res) => {
    try {
        const estadoHabitacion = await EstadoHabitacion.findByPk(req.params.id);
        if (!estadoHabitacion) return res.status(404).json({ message: 'Estado de habitación no encontrado' });
        await estadoHabitacion.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
