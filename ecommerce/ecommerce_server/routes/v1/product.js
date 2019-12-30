const express = require("express");

const controller = require("../../controllers/product");

const router = express.Router();

router.get("/filter", (req, res) => {
    res.send(controller.productFilter(req, res));
});

// Get all
router.get('/', async (req, res) => {
    try {
        const result = await controller.getList()
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

// Get one
router.get('/:id', async (req, res) => {
    try {
        const result = await controller.getItem(req.params.id)
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

// Create one
router.post('/', async (req, res) => {
    try {
        const result = await controller.create(req.body);
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

// Update one
router.put('/:id', async (req, res) => {
    try {
        const result = await controller.update(req.params.id, req.body);
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

// Delete one
router.delete('/:id', async (req, res) => {
    try {
        const result = await controller.delete(req.params.id);
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

module.exports = router;
