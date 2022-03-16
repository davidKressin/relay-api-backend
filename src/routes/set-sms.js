import {Router} from "express";
import moment from "moment";
import SetSms from "../models/set-sms";
const momentTimeZone = require('moment-timezone');

const router = Router();

const getTimesZones = ()=>{
    return momentTimeZone.tz.names();
}
// GET : /set-sms 
router.get('/', (req, res)=>{
    SetSms.find()
    .then(function(smss){
        res.json(smss);
    })
    .catch((err)=>{
        console.error(err)
    });
    // res.send('holaaaa')
});

// GET: /set-sms/create
router.get('/create', (req, res)=>{
    const zones = getTimesZones();
    console.log(zones);
    res.json(zones);
})
// GET : /set-sms/:id 
router.get('/:id', (req, res)=>{
    const id = req.params.id;
    SetSms.findOne({_id: id})
    .then(function(sms){
        const zones = getTimesZones();
        res.json({sms, zones})
    })
    // res.send('holaaaa')
});

// GET: /set-sms/edit/:id
router.get('/edit/:id', (req, res)=>{
    const id = req.params.id;
    console.log(id)
    SetSms.findOne({_id: id})
    .then(function(sms){
        // const zones = getTimesZones();
        res.json({sms})
    })
})

// POST: /set-sms
router.post('/', (req, res)=>{
    const message = req.body.message;
    const phoneNumber = req.body.phoneNumber;
    const timeZone = req.body.timeZone;
    console.log(timeZone);
    // const time = moment(req.body.time, 'MM-DD-YYYY hh:mma').tz("Chile/Continental");
    const time = moment.tz(req.body.time, 'DD-MM-YYYY hh:mma', timeZone);
    // console.log(req.body, time);
    const sms = new SetSms({
        message: message,
        phoneNumber: phoneNumber,
        timeZone: timeZone,
        time: time,
    });
    console.log(sms.time)
    sms.save()
    .then(function(){
        res.send("guardado");
    });
});


// POST: /set-sms/edit/:id
router.post('/edit/:id', (req, res)=>{
    const id = req.params.id;
    const message = req.body.message;
    const phoneNumber = req.body.phoneNumber;
    const timeZone = req.body.timeZone;
    const time = moment.tz(req.body.time, 'DD-MM-YYYY hh:mma',timeZone);

    SetSms.findOne({_id:id})
    .then(function(sms) {
        sms.message = message;
        sms.phoneNumber = phoneNumber;
        sms.timeZone = timeZone;
        sms.time = time;
    
        sms.save()
            .then(function() {
            res.send('editado');
            console.log(sms.time)
        });
    });
})

// DELETE: /set-sms/delete/:id
router.post('/delete/:id', function(req, res) {
    const id = req.params.id;
  
    SetSms.remove({_id: id})
      .then(function() {
        res.send('eliminado');
      });
  });
  
export default router;