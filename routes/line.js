const express = require("express");
const router = express.Router();

/* GET users listing. */
// "http://localhost:4000/line จาก app.js -> และ "/callback" จากด้านล่าง"
router.get("/callback", function (req, res, next) {
  res.send("line callback");
});

module.exports = router;
