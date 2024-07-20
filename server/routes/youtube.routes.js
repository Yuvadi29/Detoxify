const express = require("express");
const auth = require("../middleware/auth");
const { getVideos } = require("../controllers/youtube.controller");

const router = express.Router();

router.get('/videos', auth, getVideos);

module.exports = router;