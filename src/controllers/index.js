const sendSms = require('../send-sms.js');
const accountSid=process.env.ACCOUNT_SID;
const authToken= process.env.AUTH_TOKEN;

const client =require('twilio')('AC51e93bdc0ffb4de19d52c249bdca7084', '5030d5d11aa13aa7ef9e69f8988cc22c');


export const getIndex = (req, res) =>{
    res.send("mostrar botones")
}


export const relayOn = (req, res) =>{

    for(let i=0; i<3; i++){
        
        client.messages.create({
            to: '+56921110057',
            from: '+15075754434',
            body: "ON"
        })
        .then(message =>{
            console.log(message.sid)
        });
    }
    res.sendStatus(200);
}

export const relayOff = (req, res) =>{
    for(let i=0; i<3; i++){
        
        client.messages.create({
            to: '+56921110057',
            from: '+15075754434',
            body: "OFF"
        })
        .then(message =>{
            console.log(message.sid)
        });
    }
    
    res.sendStatus(200);

}