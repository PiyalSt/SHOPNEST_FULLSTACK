const express = require("express");

const router = express.Router();

router.post('/', createProdct);

module.exports = router;