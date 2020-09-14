const express = require("express");
const bodyParser = require("body-parser");
const session = require("cookie-session");
const app = express();

app.use(session({ secret: "nodejs" }));
app.use(bodyParser.urlencoded({ extended: false }));

// Set view engine as EJS
app.engine("html", require("ejs").renderFile);


app.set('views', './');
app.set("view engine", "html");

let tasksList = [];

app.get("/", (req, res) => {
  res.render("formulario.ejs", {});
});

app.listen(3000, () => {
  console.log("corriendo en el puerto 3000");
});

app.post('/adicionar', (req, res) =>{
  const tasks = req.body.newTasks;
  tasksList.push(tasks);
  res.redirect('/');
})