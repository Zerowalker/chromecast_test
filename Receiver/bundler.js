const proxy = require("express-http-proxy");
const express = require('express');
const app = require("express")();
const https = require("https");
const http = require("http");
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
  .listen(443, "192.168.1.50");
http
  .createServer(

    app
  )
  .listen(80, "192.168.1.50");
