const express = require('express');
const dotenv = require('dotenv');
const userRouter = require('./routes/routes'); 
const mongoose = require('mongoose');
const path = require("path");
const cors = require("cors");

// configuration
const app = express()
const PORT = process.env.PORT || 4000
dotenv.config()

// middleware 
app.use(express.json())
app.use(cors())


// routes
app.use(express.static(path.join(__dirname, "./client/build")))
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build', 'index.html'))
})

// app.use('/nft', userRouter)

//database connection
const ConnectMongoDB = () =>{
  mongoose.connect(process.env.DATABASE_URL)
  const db = mongoose.connection
  db.once('open', () => {
      console.log('Database is Connected')
  })
}

ConnectMongoDB()

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`)
})