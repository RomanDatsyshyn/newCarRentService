const router = require("express").Router();

const { authControllers } = require("../controllers");
const { authMiddleware } = require("../middlewares");

router.post(
  "/",
  authMiddleware.checkIsUserPresentMiddleware,
  authControllers.authUser
);
router.post(
  "/logout",
  authMiddleware.checkAccessTokenMiddleware,
  authControllers.logoutUser
);

module.exports = router;
