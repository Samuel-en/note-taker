// dependencies 
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const { urlencoded } = require('body-parser');

// express instance 
const app = express();

// port 
const PORT = process.env.PORT || 8080;

// middleware code
app.use(express,urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// routers 

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

