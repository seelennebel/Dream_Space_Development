const express = require("express");
const path = require("path");
const helmet = require("helmet");
const rateLimiter = require("./middleware/rateLimiter");

const app = express();

const port = 8000;

//SECURITY
app.use(helmet({
    contentSecurityPolicy: false,
}));
app.use(rateLimiter);

app.use(express.static(path.join(__dirname, "../front-end/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../front-end/dist/index.html"));
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});






