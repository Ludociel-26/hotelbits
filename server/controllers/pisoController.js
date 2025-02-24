import Piso from '../models/piso.js';

export const createPiso = async (req, res) => {
    try {
        const piso = await Piso.create(req.body);
        res.status(201).json(piso);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getPisos = async (req, res) => {
    try {
        const pisos = await Piso.findAll();
        res.status(200).json(pisos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getPisoById = async (req, res) => {
    try {
        const piso = await Piso.findByPk(req.params.id);
        if (!piso) return res.status(404).json({ message: 'Piso no encontrado' });
        res.status(200).json(piso);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updatePiso = async (req, res) => {
    try {
        const piso = await Piso.findByPk(req.params.id);
        if (!piso) return res.status(404).json({ message: 'Piso no encontrado' });
        await piso.update(req.body);
        res.status(200).json(piso);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deletePiso = async (req, res) => {
    try {
        const piso = await Piso.findByPk(req.params.id);
        if (!piso) return res.status(404).json({ message: 'Piso no encontrado' });
        await piso.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
