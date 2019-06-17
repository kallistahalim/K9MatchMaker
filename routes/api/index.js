const router = require("express").Router();
const furFriends = require("./furs");

// Book routes
router.use("/furs", furFriends);

module.exports = router;
