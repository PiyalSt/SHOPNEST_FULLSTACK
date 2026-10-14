const express = require("express");
const { createProdct, getAllProdct } = require("../controllers/productControllers");
const upload = require("../middleware/upload");

const router = express.Router();

router.post('/', upload.single("image") , createProdct);
router.get('/', getAllProdct);

// Image upload route
// router.post('/upload', upload.single("image"), uploadImage);

module.exports = router;