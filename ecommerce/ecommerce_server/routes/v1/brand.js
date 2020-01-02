const express = require("express");

const controller = require("../../controllers/brand");
const router = express.Router();

// Get from brand
router.get('/:idBrand/:idProduct', async (req, res) => {
    try {
        const result = await controller.getFromBrand(req.params.idBrand, req.params.idProduct);
        res.status(200).json({ code: 200, result: { object: result }});
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get all
router.get('/', async (req, res) => {
    try {
        const result = await controller.getList();
        res.status(200).json({ code: 200, result: { object: result }});
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get one
router.get('/:id', async (req, res) => {
    try {
        const result = await controller.getItem(req.params.id);
        res.status(200).json({ code: 200, result: { object: result }});
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create one
router.post('/', async (req, res) => {
    try {
        const result = await controller.create(req.body);
        res.status(200).json({ code: 200, result: { object: result }});
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update one
router.put('/:id', async (req, res) => {
    try {
        const result = await controller.update(req.params.id, req.body);
        res.status(200).json({ code: 200, result: { object: result }});
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Delete one
router.delete('/:id', async (req, res) => {
    try {
        const result = await controller.delete(req.params.id);
        res.status(200).json({ code: 200, result: { object: result }});
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;