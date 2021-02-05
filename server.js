// dependencies 
const express = require('express');
const path = require('path');
const fs = require('fs');
const { urlencoded } = require('body-parser');

// Create an instance of express
const app = express();
// port 
const PORT = process.env.PORT || 8080;

// middleware code
app.use(express,urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// routers 

require("./routes/api-routes")(app);
require("./routes/views-route")(app);


// Listener
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });