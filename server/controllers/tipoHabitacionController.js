import TipoHabitacion from '../models/tipoHabitacion.js';

export const createTipoHabitacion = async (req, res) => {
    try {
        const tipoHabitacion = await TipoHabitacion.create(req.body);
        res.status(201).json(tipoHabitacion);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getTiposHabitacion = async (req, res) => {
    try {
        const tipos = await TipoHabitacion.findAll();
        res.status(200).json(tipos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getTipoHabitacionById = async (req, res) => {
    try {
        const tipoHabitacion = await TipoHabitacion.findByPk(req.params.id);
        if (!tipoHabitacion) return res.status(404).json({ message: 'Tipo de habitación no encontrado' });
        res.status(200).json(tipoHabitacion);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateTipoHabitacion = async (req, res) => {
    try {
        const tipoHabitacion = await TipoHabitacion.findByPk(req.params.id);
        if (!tipoHabitacion) return res.status(404).json({ message: 'Tipo de habitación no encontrado' });
        await tipoHabitacion.update(req.body);
        res.status(200).json(tipoHabitacion);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteTipoHabitacion = async (req, res) => {
    try {
        const tipoHabitacion = await TipoHabitacion.findByPk(req.params.id);
        if (!tipoHabitacion) return res.status(404).json({ message: 'Tipo de habitación no encontrado' });
        await tipoHabitacion.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
