const express = require("express");
const auth_routes = require("./router/auth_routes");
const mongoose = require("mongoose");

const port = 8000;

const app = express();

const database = "mongodb+srv://seelennebel:seelennebel@dreamspace.rv09qyt.mongodb.net/";
mongoose.connect(database)
    .then((result) => {
        app.listen((port));
        console.log(`listening on port ${port}`);
    })
    .catch((err) => {console.log(err)});

app.use(express.json());
app.use(auth_routes);

app.get("/", (req, res) => {
    res.send("Hello from the backend");
    res.end();
});




