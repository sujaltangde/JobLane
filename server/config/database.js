const mongoose = require('mongoose')

const databaseConnection = () => {
    const dbUri = process.env.DB && process.env.DB.trim()

    if (!dbUri) {
        console.error('ERROR: Missing required environment variable DB.')
        console.error('Set DB in server/config/config.env or run Docker with --env-file /path/to/config.env or -e DB=...')
        process.exit(1)
    }

    mongoose.connect(dbUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then((data) => {
        console.log(`database connected successfully at server ${data.connection.host}`)
    }).catch((err) => {
        console.error('MongoDB connection failed:', err.message || err)
        process.exit(1)
    })
}

module.exports = databaseConnection