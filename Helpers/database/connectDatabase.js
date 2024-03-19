const mongoose = require("mongoose")

const connectDatabase = async () => {
    const URI = process.env.MONGO_URI;
    mongoose.connect(URI).then(() => {
        console.log("DB connected successfully.")
    }).catch(err => {
        console.log(err);
        process.exit(1);
    })
}

module.exports = connectDatabase;