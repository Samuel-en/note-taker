
const path = require("path");

 module.exports = (app) => {

      
//  View the notes page 
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../publicFrontend/notes.html"));
        });
// If no matching route is found default to home
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../publicFrontend/index.html"));
     });
       };