const proxy = require("express-http-proxy");
const express = require('express');
const app = require("express")();
const https = require("https");
const fs = require("fs");
const helmet = require("helmet");

app.use(helmet());

app.use(express.static('public'));

// we will pass our 'app' to 'https' server
https
  .createServer(
    {
      key: fs.readFileSync("./certs/localhost.key"),
      cert: fs.readFileSync("./certs/localhost.crt"),
      passphrase: ""
    },
    app
  )
  .listen(8080, "0.0.0.0");
