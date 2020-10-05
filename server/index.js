const express = require("express");
const bodyParser = require("body-parser")
const cors = require("cors");

const bookRouters = require('./src/routers/book-router')
const authRouters = require('./src/routers/auth-router')
const db = require("./src/db")


const app = express(); 
const apiPort=3000;

app.use(express.json({ extended: true }))

// app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());
// app.use(bodyParser.json());



db.on('error',console.error.bind(console,'MongoDB connection error:'));

app.get('/',(req,res)=>{
res.send('Hello world')})

app.use('/api',bookRouters)
app.use('/api',authRouters)

app.listen(apiPort, () => console.log("server started on port 3000"));
