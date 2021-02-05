const path = require("path");
const fs = require("fs");
const util = require("util");
const db = require("../db/db.json");
const { v4: uuidv4 } = require('uuid');
const writeFileSync = util.promisify(fs.writeFile);
const readFile = fs.readFile;

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
      app.delete("/api/notes/:id", (req, res) => {
     
       readFile("./db/db.json", (error , data) => {
         let db = JSON.parse(data);
        let newNote = db.filter((note) => note.id != req.params.id);
        console.log(newNote);
        const updateNote = newNote;
        writeFileSync("./db/db.json", JSON.stringify(updateNote))
          .then(() => {
            res.json(updateNote);
          })
          .catch((err) => {
            console.error(err);
          });
       });
        
      });
    };