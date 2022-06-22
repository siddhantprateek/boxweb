const mongoose = require('mongoose')

//schemas
const NFTSchema = mongoose.Schema({
    collection_imgurl: String,
    collection_title: String,
    nft_imgurl: String,
    remaining_time: String,
    current_bid: Number,
    average_bid: Number
})

module.exports = mongoose.model('collectiondb', NFTSchema);