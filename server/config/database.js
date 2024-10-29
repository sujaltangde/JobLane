const mongoose = require('mongoose')

const databaseConnection = () => {
    mongoose.connect('mongodb+srv://192105adityashah:12QX651CYMCrGmT6@cluster0.akacd.mongodb.net/testdel?retryWrites=true&w=majority&appName=Cluster0',{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then((data)=>{
        console.log(`database connected successfully at server ${data.connection.host}`)
    })
}

module.exports = databaseConnection