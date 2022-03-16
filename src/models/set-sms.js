import  mongoose  from "mongoose";
import moment from "moment-timezone";
import { Twilio } from "twilio";
const {Schema} = mongoose;

const SetSmsSchema = new Schema({
    message: String,
    phoneNumber: String,
    timeZone: String,
    time: {type: Date, index: true},
})

SetSmsSchema.statics.sendSms = (callback) =>{
    const searchDate = new Date();
    const now = moment().tz("Chile/Continental").format()
    const ahora = moment.tz(searchDate, "Chile/Continental");
    
    console.log(ahora);
    SetSms
    .find()
    .then(function(smss){
        smss = smss.filter(function(sms){
            let date = new Date(sms.time);
            // let time = date.toISOString();
            
            date = moment(sms.time).tz(sms.timeZone);
            // let time = date.toISOString();

            console.log(date);

            return date.format() === ahora.format();
            // Math.round(
            //     moment.duration(
            //       moment(date).tz(sms.timeZone).utc()
            //       .diff(moment(searchDate).utc())
            //     ).asMinutes()
            //   )  === "0";
        });
        console.log(smss.length);
        if(smss.length > 0){
            console.log("se detecto un sms a esta hora")
            sendSms(smss);
        }
    });

    function sendSms(smss){
        const client = require('twilio')("AC51e93bdc0ffb4de19d52c249bdca7084", "b7589c6a0f1d808d70c5c986927a0e92");
        smss.forEach(function(sms){
            console.log(sms.message);
            const options = {
                to: `${sms.phoneNumber}`,
                from: "+15075754434",
                body: `${sms.message}`,
            };

            client.messages.create(
                {
                    to: `${sms.phoneNumber}`,
                    from: "+15075754434",
                    body: `${sms.message}`,
                })
                .then(
                    message => console.log(message.body)
                )
                .catch(
                    err => console.error(err)
                )
                // function(err, response){
                // if(err){
                    // console.error(err);
                // }else{
                    // console.log(`message ${sms.message} sent to ${sms.phoneNumber}`);
                // }
            // }
            // )
        })
    }
}

const SetSms = mongoose.model('setsms', SetSmsSchema)
module.exports = SetSms;