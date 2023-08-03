const mongoose = require('mongoose')
async function connect(){
    await mongoose.connect(
        'mongodb://0.0.0.0:27017/teste-backend'
    )
}
connect()
    .then(console.log('Connected to database!'))
    .catch((err) => console.log(err))
module.exports = {
    connect
}