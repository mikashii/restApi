const express = require('express')
const app = express()

//Rotas
const productsRoutes = require('./api/routes/products')



app.use('/products', productsRoutes) //tudo que for acessado e iniciado por /products, será direcionado para a resource /products
module.exports = app;