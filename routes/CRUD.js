const express = require('express');
const CRUD = require('../controllers/CRUD');

const router = express.Router();

//ROUTERS
router.get('/', CRUD.CRUD_get_all);

module.exports = router;

