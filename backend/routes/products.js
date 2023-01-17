const express = require('express');

const router = express.Router();

const proCtrl = require('../controllers/products');

router.get('/', proCtrl.getAllProducts);
router.post('/', proCtrl.createProduct);
router.get('/:id', proCtrl.getOneProduct);
router.put('/:id', proCtrl.modifyProduct);
router.delete('/:id', proCtrl.deleteProduct);

module.exports = router;