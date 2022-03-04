import express from "express";
import cors from "cors";
import morgan from "morgan";
import moment from 'moment-timezone';
const bodyParser = require('body-parser')

import rutas from "./routes"
import rutasAutomaticas from "./routes/set-sms"
const scheduler = require('./scheduler');


const app = express();

require('dotenv').config();

app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);


// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());
app.use(express.json());
// app.locals.moment = moment;


//routes
app.use('/',rutas);
app.use('/set-sms', rutasAutomaticas);

scheduler.start();

export default app