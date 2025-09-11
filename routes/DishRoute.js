
// var express = require('express');
// var router = express.Router();
// var Dishcontroller = require('../controller/Dishcontroller');

// router.get('/chicken', Dishcontroller.newDishess);

// module.express = router;


const express = require("express");
const router = express.Router();

const Dishcontroller = require("../controller/Dishcontroller");

router.get('/dish' , Dishcontroller.Newdish );


module.exports = router;