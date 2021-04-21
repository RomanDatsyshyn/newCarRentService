const router = require("express").Router();

const { userControllers } = require("../controllers");
const { authMiddleware } = require("../middlewares");

router.post(
  "/",
  authMiddleware.checkIsUserDataNotEmptyMiddleware,
  authMiddleware.checkIsPhoneUniqueMiddleware,
  userControllers.createUser
);
router.get(
  "/",
  authMiddleware.checkAccessTokenMiddleware,
  authMiddleware.getUserFromToken,
  userControllers.getUser
);

module.exports = router;
