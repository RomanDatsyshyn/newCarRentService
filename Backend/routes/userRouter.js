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
  userMiddlewares.checkAccessTokenMiddleware,
  userMiddlewares.getUserFromToken,
  userControllers.getUser
);
router.put(
  "/edit",
  userMiddlewares.checkAccessTokenMiddleware,
  userMiddlewares.getUserFromToken,
  userMiddlewares.checkIsPasswordNotEmptyMiddleware,
  userControllers.changePassword
);
router.delete(
  "/delete",
  userMiddlewares.checkAccessTokenMiddleware,
  userMiddlewares.getUserFromToken,
  userControllers.deleteUser
);

module.exports = router;
