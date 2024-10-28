const express = require('express');
const { searchPhotos } = require('../controllers/photoController');

const router = express.Router();

router.get('/search', searchPhotos);

module.exports = router;
