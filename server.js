const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const auth = require('./routes/auth');
const user = require('./routes/user');

const app = express();
//to receive json data
app.use(express.json());
//initilze cors 
app.use(cors({
    origin: '*'
}));

//connect mongobd
mongoose.connect('mongodb+srv://Sravani520:Sravani09@cluster0.o26nd8w.mongodb.net/?retryWrites=true&w=majority').then(
    console.log("Db is connected")
);

//auth api's
app.use('/api/auth', auth);
//users api's
app.use('/api/user', user);

//run server
app.listen(3000, () => console.log('server is running'));