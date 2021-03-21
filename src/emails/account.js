const sgMail = require("@sendgrid/mail");

const sendgridAPIKey =
  "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";

sgMail.setApiKey(sendgridAPIKey);

sgMail.send({
  to: "90137rahul@gmail.com",
  from: "e404rahul@gmail.com",
  subject: "This is my first creation 🚗🚗",
  text: "I hope this one actually get to you",
  html: "<strong>Hi this is Rahul Sharma</strong>",
});
