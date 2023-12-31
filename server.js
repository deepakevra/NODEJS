const connection = require("./database/db")
const express = require("express");
const router = require('./router/route')
const app = express();
const port = 3000;

app.use(express.json());
app.use(router)
app.listen(port, () => {
  console.log("App listening at http://localhost:"+port);
});