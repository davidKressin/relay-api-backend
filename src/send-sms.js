const accountSid=process.env.ACCOUNT_SID;
const authToken= process.env.AUTH_TOKEN;

const sendSms = () =>{
    const client =require('twilio')('AC51e93bdc0ffb4de19d52c249bdca7084', '5030d5d11aa13aa7ef9e69f8988cc22c');
    client.messages.create({
        to: '+56921110057',
        from: '+15075754434',
        body: "OFF"
    })
    .then(message => console.log(message.sid));
}

exports.sendSms = sendSms;