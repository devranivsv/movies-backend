//Import packages
const express = require('express');
const cors = require('cors');
const app = express();

//Import utilities
const utils = require('./utils');

//Initialize database
utils.database.mongooseConnection;

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Import routes
const { movieRouter, } = require('./routes')

app.use('/api/movies', movieRouter);


//Starting server
app.listen(3000, () => console.log('App Started'));
