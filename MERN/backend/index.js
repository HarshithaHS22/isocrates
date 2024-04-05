//Establishing connection with server
let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require("body-parser");
const employeeRoute = require("./Routes/employee.routes");
mongoose
    .connect("mongodb://localhost:27017/isocrates")
    .then((x) => {  // x- outcome of connection operation
        console.log(`connection established "${x.connections[0].name}"`,);
    })
    .catch((err) => {
        console.log(err);
        console.error("Error connecting to DB", err.reason);
    });
// connection to the port
    const app = express();
    app.use(bodyParser.json()); //methods of baody-parser
    app.use(bodyParser.urlencoded({
        extended: true,
    }),
    );
    app.use(cors()); // CORS
    app.use("/employee",employeeRoute);
    const port = 4000;
    const server = app.listen(4000,() => {  // Ananymous function
        console.log("connected to port"+port);
    });
