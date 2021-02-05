// dependencies 
const express = require('express');
const path = require('path');
const fs = require('fs');

// Create an instance of express
const app = express();
// port 
const PORT = process.env.PORT || 8080;

// middleware code
app.use(express,urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, "publicFrontend")));

// routers 

require("./routes/apiRoutes")(app);
require("./routes/viewsRoutes")(app);


// Listener
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });