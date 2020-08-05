const express = require('express');
const search_file = require('../../controllers/api/Search.controller');

const router = express.Router();

router.post('/', search_file.seach_File);

module.exports = router;