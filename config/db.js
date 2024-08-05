const mongoose = require ("mongoose")

const connectDb = async () => {
    try {
        const connect = await mongoose.connect("mongodb+srv://chukwubambo:Genesischapter1vs1@cluster0.d6p5mel.mongodb.net/")
        console.log("mongodb connected sucessfully" + connect.connection.host)
    } catch (error) {
        console.log(error)
    }
}


module.exports = connectDb