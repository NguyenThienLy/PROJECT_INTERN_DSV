const express = require("express");

const controller = require("../../controllers/product");

const router = express.Router();

router.get("/filter", (req, res) => {
     res.send(controller.productFilter(req,res));
});

// Get all subscribers
router.get('/', (req, res) => {
    res.send("Get all subscribers")
});

// Get one subscriber
router.get('/:id', (req, res) => {
});

// Create one subscriber
router.post('/', (req, res) => {

});

// Update one subscriber
router.patch('/:id', (req, res) => {
});

// Delete one subscriber
router.delete('/:id', (req, res) => {
});


module.exports = router;
