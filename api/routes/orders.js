const express = require('express')
const router = express.Router()

router.get('/', (req, res, next)=>{
    res.status(200).json({
        message: 'GET Orders were fetched'
    }) 
})
router.post('/', (req, res, next) =>{
    res.status(201).json({
        message: 'Post orders ok'
    })
})

router.get('/:orderId', (req,res,next) => {
    
    res.status(200).json({
        message: " Order id",
        orderId: req.params.orderId
    })
})


module.exports = router