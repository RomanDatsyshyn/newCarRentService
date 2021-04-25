const router = require("express").Router();

const { orderControllers } = require("../controllers");
const { orderMiddlewares } = require("../middlewares");

router.use(orderMiddlewares.getTokenFromHeadersMiddleware);

router.get("/", orderControllers.getAll);
router.get("/:order_id", orderControllers.getOrderById);

router.post(
  "/create",
  orderMiddlewares.checkIsOrderDataNotEmptyMiddleware,
  orderControllers.createOrder
);

module.exports = router;
