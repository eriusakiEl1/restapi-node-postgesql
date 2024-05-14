const express = require("express");
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use(require("./routes/routes.js"));

app.listen(4040);
console.log("Server on port 4040");
