const express = require('express')
const Router = express.Router()

Router.get('/',(req, res)=>{
    res.send('heyyyyyyy')
})

module.exports = Router