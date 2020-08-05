const express = require('express');
const File = require('../controllers/File.controller');

const router = express.Router();

//FILE ROUTER HANDLERS
router.get('/', File.File_get_all);
router.post('/', File.File_post); 


module.exports = router;

