const router = require("express").Router();

const { authControllers, adminControllers } = require("../controllers");
const { authMiddlewares } = require("../middlewares");

router.post("/auth/drv-login", authControllers.authAdmin);
router.post("/auth/logout", authControllers.logoutUser);

router.use(authMiddlewares.checkAdminTokenMiddleware);
router.use(
  "/users/:user_id",
  authMiddlewares.checkIsUserPresentMiddlewareAdminPanel
);

router.put("/users/:user_id/block", adminControllers.blockUser);
router.put("/users/:user_id/unblock", adminControllers.unblockUser);

module.exports = router;
