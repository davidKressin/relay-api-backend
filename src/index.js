import app from "./app.js";

import mongoose from "mongoose";


app.listen(app.get('port'), ()=>{
    console.log('server on port ', app.get('port'));
})

mongoose.connect('mongodb://127.0.0.1:27017/relay-app', {
    useMongoClient: true,
}).then(
    console.log("connectado a la db")
);

mongoose.Promise = Promise;
// mongoose.Promise = ('bluebird');