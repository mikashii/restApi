const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
      Message: "Get method ok"
  })
})
// somente a barra, se não, irá direcionar para /products/products

router.post('/', (req, res, next) => {
    res.status(200).json({
        Message: "POST method to /products"
    })
})



module.exports = router;

















