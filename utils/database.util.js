//For accessing env variables
require('dotenv').config();

//Import packages
const mongoose = require('mongoose')

mongoose.set('strictQuery', false);
const mongooseConnection = mongoose.connect(
    process.env.MONGO_URI,
    {},
    (err) => {
        if (err) {
            console.log('MonogDB Error:', err);
            return;
        }
        console.log('Connected to MongoDB');
    }
);

module.exports = {
    mongooseConnection
};