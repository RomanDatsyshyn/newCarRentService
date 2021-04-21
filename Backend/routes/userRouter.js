const router = require("express").Router();

const { userControllers } = require("../controllers");
const { authMiddlewares, userMiddlewares } = require("../middlewares");

router.post(
  "/",
  authMiddlewares.checkIsUserDataNotEmptyMiddleware,
  authMiddlewares.checkIsPhoneUniqueMiddleware,
  userControllers.createUser
);
router.get(
  "/",
  authMiddlewares.checkAccessTokenMiddleware,
  authMiddlewares.getUserFromToken,
  userControllers.getUser
);
router.put(
  "/edit",
  authMiddlewares.checkAccessTokenMiddleware,
  authMiddlewares.getUserFromToken,
  userMiddlewares.checkIsPasswordNotEmptyMiddleware,
  userControllers.changePassword
);

module.exports = router;
