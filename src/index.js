import app from "./app.js";

import mongoose from "mongoose";


app.listen(app.get('port'), ()=>{
    console.log('server on port ', app.get('port'));
})

const user = "david";
const password = "davidignacio";
const dbname = "relay-app";
const uri = `mongodb+srv://${user}:${password}@clusterbootcamp.xtlf3.mongodb.net/${dbname}}?retryWrites=true&w=majority`;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(
    console.log("connectado a la db")
).catch( e => console.error(e));

mongoose.Promise = Promise;
// mongoose.Promise = ('bluebird');