const express = require('express');
const home = require('../controllers/home');

const router = express.Router();

//ROUTER
router.get('/', home.home_get_all);

module.exports = router;



