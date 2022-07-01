const path = require("path");
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "../../../../")));

app.get("/", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "../../../../index.html"));
});
app.listen(PORT);
