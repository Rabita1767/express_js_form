const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const port = 8000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "html", "index.html"));

})
app.post("/", (req, res) => {
    res.send(`<h2>Name : ${req.body.name}</h2><br><h2>Name : ${req.body.email}</h2><br><h2>Name : ${req.body.password}</h2>`)

})
app.listen(port, (req, res) => {
    console.log(`Server is running on port ${port}`)
})