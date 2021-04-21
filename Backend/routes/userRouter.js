const router = require("express").Router();

const { userControllers } = require("../controllers");
const { authMiddleware } = require("../middlewares");

router.post(
  "/",
  authMiddleware.checkIsUserDataNotEmptyMiddleware,
  authMiddleware.checkIsPhoneUniqueMiddleware,
  userControllers.createUser
);

module.exports = router;
