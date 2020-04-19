const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        Message: "Get method ok"
    })
})
// somente a barra, se não, irá direcionar para /products/products

router.post('/', (req, res, next) => {
    res.status(201).json({
        Message: "POST method to /products"
    })
})

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId; // extrair o id do rota
    if (id === 'special') {
        res.status(200).json({
            Message: "Você acessou o ID 'Especial' ",
            id: id
        })
    } else {
        res.status(200).json({
            message: "You passed an ID"
        })
    }
})

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        Message: "Updated product"        
    })
})
router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        Message: "Deleted product"    
    })
})



module.exports = router;