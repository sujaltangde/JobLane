const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
const fileUpload = require('express-fileupload')

dotenv.config({path:'./config/config.env'})

app.use(express.json({ limit: '10mb' }))

app.use(cors({
    origin: "*",
    credentials: true
}))

app.use(fileUpload())


const User = require('./routes/UserRoutes')

app.use("/api/v1",User)

app.get("/",(req,res)=>{
    res.json("I am working")
})                           
    

module.exports = app ;