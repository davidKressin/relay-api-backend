import express from "express";
import cors from "cors";
import morgan from "morgan";
import rutas from "./routes/index.js"

const app = express();

require('dotenv').config();

app.set('port', 3000);
app.set('json spaces', 2);
// middlewares
app.use(morgan('dev'));
//routes
app.use(rutas);


export default app