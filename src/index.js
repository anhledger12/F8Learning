// import { create } from 'domain';
import express from 'express';
import {engine} from 'express-handlebars';
import {create} from 'express-handlebars';
import morgan from "morgan";
import path from "path"

const __dirname = path.resolve()
const app = express();
const port = 3000;

//HTTP logger
app.use(morgan("combined"));
const hbs = create()
//Template engine
app.engine('.hbs', engine({
  extname: '.hbs'
}));
// app.engine("handlebars", hbs.engine);
// app.set("view engine", "handlebars");
app.set("view engine", ".hbs");
app.set('views', 'src/resources/views')

app.get("/trang-chu", (req, res) => {
  res.render('home');
});

app.get("/news", (req, res) =>{
  res.render('news');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});