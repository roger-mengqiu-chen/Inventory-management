import express from "express";
import path from "path";
import bodyParser from "body-parser";
import productRoute from "./routes/products.js";
import userRoute from "./routes/users.js";
import { mongoConnect } from "./util/database.js";


const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

mongoConnect(() => {
  app.listen(3000);
})
