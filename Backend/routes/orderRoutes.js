const router = require("express").Router();

const { orderControllers } = require("../controllers");
const { orderMiddlewares } = require("../middlewares");

router.get("/analytics", orderControllers.getOrderAnalytics);

router.use(orderMiddlewares.getTokenFromHeadersMiddleware);

router.get("/", orderControllers.getAll);
router.get("/:order_id", orderControllers.getOrderById);
router.delete("/:order_id", orderControllers.deleteOrder);

router.post(
  "/create",
  orderMiddlewares.checkIsOrderDataNotEmptyMiddleware,
  orderControllers.createOrder
);

module.exports = router;
