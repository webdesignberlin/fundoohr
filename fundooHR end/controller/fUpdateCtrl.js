/**
 * define require module
 */
var express = require('express');
var router = express.Router();


router.post('/', function(req, res) {
  console.log("Data save...");
});

module.exports=router;
