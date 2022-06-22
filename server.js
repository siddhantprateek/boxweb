const express = require('express')
const dotenv = require('dotenv')
const userRouter = require('./routes/routes') 
const mongoose = require('mongoose')
const app = express()
const port = process.env.port || 4000

dotenv.config()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/routes', userRouter)

//database connection
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.once('open', () => {
    console.log('Database is Connected')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})