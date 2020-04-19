const express = require('express')
const app = express()

//Rotas
const productsRoutes = require('./api/routes/products')
const productsOrders = require('./api/routes/orders')



app.use('/products', productsRoutes) //tudo que for acessado e iniciado por /products, será direcionado para a resource /products
app.use('/orders', productsOrders)


module.exports = app;