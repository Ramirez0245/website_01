const express = require('express');
const home = require('../controllers/home.controller');

const router = express.Router();

router.get('/', home.home_get_all); //HOME ROUTE HANDLER

module.exports = router;



