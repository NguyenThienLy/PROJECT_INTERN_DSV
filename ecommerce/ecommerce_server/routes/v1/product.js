const express = require("express");
const Multer = require('multer');

const authencation = require("../../middlewares/authencation");
const controller = require("../../controllers/product");
const router = express.Router();

const multer = Multer({
    storage: Multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024 // no larger than 5mb, you can change as needed.
    }
});

// Get fitler
router.get('/fitler', async (req, res) => {
    try {
        const result = await controller.getListFitler(req.params);
        res.status(200).json({ code: 200, result: { object: result } });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get all
router.get('/', async (req, res) => {
    try {
        const result = await controller.getList();
        res.status(200).json({ code: 200, result: { object: result } });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get one
router.get('/:slug', async (req, res) => {
    try {
        const result = await controller.getItem(req.params.slug);
        res.status(200).json({ code: 200, result: { object: result } });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create one
router.post('/', authencation.isAuth, multer.array("subImage"), async (req, res) => {
    try {
        if (req.authInfo === "seller") {
            const result = await controller.create(req.files, req.body);
            res.status(200).json({ code: 200, result: { object: result } });
        }
        else { res.status(401).json({ message: 'You need login!' }); }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update one
router.put('/:id', authencation.isAuth, multer.array("subImage"), async (req, res) => {
    try {
        if (req.authInfo === "seller") {
            const result = await controller.update(req.params.id, req.files, req.body);
            res.status(200).json({ code: 200, result: { object: result } });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Delete one
router.delete('/:id', async (req, res) => {
    try {
        const result = await controller.delete(req.params.id);
        res.status(200).json({ code: 200, result: { object: result } });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
