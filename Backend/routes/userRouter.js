const router = require("express").Router();

const { userControllers } = require("../controllers");
const { authMiddleware } = require("../middlewares");

router.post(
  "/",
  authMiddleware.checkIsUserDataNotEmpty,
  authMiddleware.checkIsPhoneUnique,
  userControllers.createUser
);

module.exports = router;
