const express = require("express")

const port = 8000;

const app = express();

app.get("/", (req, res) =>
{
    res.setHeader("Content-Type", "text/html");
    res.send("HELLO");
    res.end();
});

console.log(`listening on port ${port}`);

app.listen(port);