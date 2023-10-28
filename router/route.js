const express = require('express');
const trail = require('../controller/controller');
const router = express.Router();

router.post('/post1',trail.postdata1);
router.post('/post2',trail.postdata2);
router.get('/get1',trail.getdata1);
router.get('/get2',trail.getdata2);
router.get('/getotp',trail.otp);


module.exports= router