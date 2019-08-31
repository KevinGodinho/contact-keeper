const express = require("express");
const router = express.Router();

// @route     GET api/users
// @desc      Get all users contacts
// @access    Public
router.post("/", (req, res) => {
  res.send("Register a user");
});

module.exports = router;
