var express = require('express');
var cors = require("cors");
var serverless = require ('serverless-http');
var port = process.env.PORT || 5000;
var app = express();
var asignatura = require("../../backend1/asignatura.js");
app.use(express.json());
app.use(cors());
 
var router = express.Router();
router.use ("/asignatura",asignatura);
 
var handler = app.use ('/functions',router);
exports.handler = serverless (app);