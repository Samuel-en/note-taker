const express = require("express");
const path = require("path");
const fs = require("fs");
const util = require("util");
const { v4: uuidv4 } = require('uuid');
const writeFileAsync = util.promisify(fs.writeFile);

module.exports = (app) => {
    // API Routes
    app.get("/api/notes", (req, res) => {
      readFile("./db/db.json", (error , data) => {
        let db = JSON.parse(data);
        if (error) throw console.log(error);
        res.json(db);
       });
     });
     // POST method route
     app.post("/api/notes", (req, res) => {
        let note = req.body;
        let id = uuidv4();
        note.id = id;

        db.push(note);
        writeFileSync("./db/db.json", JSON.stringify(db))
          .then(() => {
            res.json(note);
          })
          .catch((err) => console.error(err));
      });
    };