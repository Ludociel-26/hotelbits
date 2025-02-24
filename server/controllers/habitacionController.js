import Habitacion from '../models/habitacion.js';

export const createHabitacion = async (req, res) => {
    try {
        const habitacion = await Habitacion.create(req.body);
        res.status(201).json(habitacion);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getHabitaciones = async (req, res) => {
    try {
        const habitaciones = await Habitacion.findAll();
        res.status(200).json(habitaciones);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getHabitacionById = async (req, res) => {
    try {
        const habitacion = await Habitacion.findByPk(req.params.id);
        if (!habitacion) return res.status(404).json({ message: 'Habitación no encontrada' });
        res.status(200).json(habitacion);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateHabitacion = async (req, res) => {
    try {
        const habitacion = await Habitacion.findByPk(req.params.id);
        if (!habitacion) return res.status(404).json({ message: 'Habitación no encontrada' });
        await habitacion.update(req.body);
        res.status(200).json(habitacion);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteHabitacion = async (req, res) => {
    try {
        const habitacion = await Habitacion.findByPk(req.params.id);
        if (!habitacion) return res.status(404).json({ message: 'Habitación no encontrada' });
        await habitacion.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
