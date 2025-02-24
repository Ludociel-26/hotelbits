import MetodoPago from '../models/metodoPago.js';

export const createMetodoPago = async (req, res) => {
    try {
        const metodo = await MetodoPago.create(req.body);
        res.status(201).json(metodo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getMetodosPago = async (req, res) => {
    try {
        const metodos = await MetodoPago.findAll();
        res.status(200).json(metodos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getMetodoPagoById = async (req, res) => {
    try {
        const metodo = await MetodoPago.findByPk(req.params.id);
        if (!metodo) return res.status(404).json({ message: 'Método de pago no encontrado' });
        res.status(200).json(metodo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateMetodoPago = async (req, res) => {
    try {
        const metodo = await MetodoPago.findByPk(req.params.id);
        if (!metodo) return res.status(404).json({ message: 'Método de pago no encontrado' });
        await metodo.update(req.body);
        res.status(200).json(metodo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteMetodoPago = async (req, res) => {
    try {
        const metodo = await MetodoPago.findByPk(req.params.id);
        if (!metodo) return res.status(404).json({ message: 'Método de pago no encontrado' });
        await metodo.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
