const app = require('./app')
const databaseConnection = require('./config/database')
const cloudinary  = require('cloudinary')
const dotenv = require('dotenv')
dotenv.config({path:"./config/config.env"})


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME ,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
}) 

databaseConnection()



app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})