const router = require("express").Router();

const { authControllers } = require("../controllers");
const { authMiddlewares } = require("../middlewares");

router.post(
  "/",
  authMiddlewares.checkIsUserPresentMiddleware,
  authControllers.authUser
);
router.post(
  "/logout",
  authMiddlewares.checkAccessTokenMiddleware,
  authControllers.logoutUser
);

module.exports = router;
