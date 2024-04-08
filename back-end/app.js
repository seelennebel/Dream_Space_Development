const express = require("express");
const auth_routes = require("./router/auth_routes");
const mongoose = require("mongoose");
const cors = require("cors")

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
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.get("/", (req, res) => {
    res.send({AMIGO: "ANAL"});
    res.end();
});




