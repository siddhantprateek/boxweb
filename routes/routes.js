const express = require('express')
const Router = express.Router()
const NFTModel = require('../model/nft.model') 

Router.get('/all',(req, res)=>{
    NFTModel.find((err, data) => {
        if(err) {
            res.status(500).send(err)
        }else {
            res.status(200).send(data)
        }
        return data
    })
})

Router.get('/:id', (req, res) => {
    const id = req.params.id
    NFTModel.findById(id, (err, data) =>{
        if(err) {
            res.status(500).send(err)
        }else {
            res.status(200).send(data)
        }
    })
})

Router.post('/create', (req, res) => {
    const NFTdata = req.body
    NFTModel.create(NFTdata, (err, data) => {
        if(err) {
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})


Router.delete('/:id', (req, res) => {
    const id = req.params.id
    NFTModel.findByIdAndDelete(id, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

Router.put('/:id', (req, res) => {
    const id = req.params.id
    const NFTdata = req.body
    NFTModel.findByIdAndUpdate(id, NFTdata, (err, data) => {
        if (err) {
            res.send(err)
        } else {
            res.send(data)
        }
    })
})

module.exports = Router