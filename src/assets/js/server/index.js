const path = require("path");
const express = require("express");
const app = express();
const PORT = 3000;

async function setupServer() {
    // Set up server.

    app.use(express.static(path.join(__dirname, "../../../../")));

    app.get("/", (req, res) => {
        res.status(200).sendFile(path.join(__dirname, "../../../../index.html"));
    });

    // Initialize myql
    const mysql = require("mysql");
    let dbConfig = require("../../json/db.json");
    const connection = mysql.createConnection(dbConfig);

    // Initialize routes.
    const ProjectRoutes = require("./routes/projectRoutes.js");
    new ProjectRoutes(app, connection);

    // Start up server.
    app.listen(PORT);
}

setupServer();
