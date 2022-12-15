const express = require('express')
const app =express();
const PORT  = process.env.PORT || 8000
const bodyparser =require('body-parser')
const cors = require('cors')
var nodemailer = require('nodemailer');
var sendGridTransport = require('nodemailer-sendgrid-transport');


app.listen(PORT,(req, res)=>{
    consol.log('Server Connected')
})