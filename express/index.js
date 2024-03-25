// TO fetch data from database:
let express = require('express');
let mongoose = require('mongoose');
// To start the connection
mongoose
.connect('mongodb+srv://harshithahs:2c9rvp6tsrAHzYEU@cluster0.palvjau.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then((x) => {
    console.log('Connected to DB');
})
.catch((err) => {
    console.error('Error connecting to DB');
});

const app = express();
const server = app.listen(4000,() => {
    console.log('Connected to port 4000')
});