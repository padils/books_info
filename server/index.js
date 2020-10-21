const express = require('express')
const cors = require('cors')

const bookRouters = require('./src/routers/book-router')
const authRouters = require('./src/routers/auth-router')
const imgRouters = require('./src/routers/img-router')
const db = require('./src/db')

const app = express()
const apiPort = 3000

app.use(express.json({extended: true}))

app.use(cors())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.use('/api', bookRouters)
app.use('/api', authRouters)
app.use('/api', imgRouters)

app.listen(apiPort, () => console.log('server started on port 3000'))
