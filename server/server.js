const app = require('./app')
const databaseConnection = require('./config/database')



databaseConnection()



app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})