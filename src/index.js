const express = require("express");
const app = express();
const {PORT} = require('../../config')

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use(require("./routes/routes.js"));

app.listen(PORT);
console.log("Server on port 4040");
