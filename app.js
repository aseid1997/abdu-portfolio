const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const bodyparser = require("body-parser");
const cors = require("cors");
var nodemailer = require("nodemailer");
var sendGridTransport = require("nodemailer-sendgrid-transport");

require("dotenv").config();

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

const transport = nodemailer.createTransport(
  sendGridTransport({
    auth: { api_key: process.env.API_SENDGRID },
  })
);
app.post("/sendemail", (req, res) => {
  const { name, email, jobType, messge } = req.body;

  if (!name) {
    res.status(400).json({ error: "PLease enter your name" });
  }
  if (!email) {
    res.status(400).json({ error: "PLease enter your email" });
  }
  if (!jobType) {
    res.status(400).json({ error: "PLease enter your jontype" });
  }
  if (!messge) {
    res.status(400).json({ error: "PLease enter your message" });
  }

  transport.sendMail({
    to: "ibnuseid376@gmail.com",
    from: "ibnuseid376@gmail.com",
    subject: "Job Offers",
    html: `<h5>Details Information</h5>
    <ul>
    <li>
    <p>Name: ${name}</p>
    <p>Name: ${email}</p>
    <p>Name: ${jobType}</p>
    <p>Name: ${messge}</p>
    </li>
    </ul>
    `,
  });
  res.json({ success: "Your Email is sent Succesfully" });
});
app.listen(PORT, (req, res) => {
  console.log("Server Connected");
});
