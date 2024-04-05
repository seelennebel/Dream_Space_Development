const express = require("express");
const auth_routes = require("./router/auth_routes");
const mongoose = require("mongoose");

const port = 8000;


const database = "mongodb+srv://seelennebel:seelennebel@dreamspace.rv09qyt.mongodb.net/";
mongoose.connect(database);



const app = express();

app.use(express.json());
app.use(auth_routes);

app.listen(8000);


console.log(`listening on port ${port}`);


