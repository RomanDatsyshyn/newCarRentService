const router = require("express").Router();

const { orderControllers } = require("../controllers");
const { orderMiddlewares } = require("../middlewares");

router.post(
  "/create",
  orderMiddlewares.getTokenFromHeadersMiddleware,
  orderMiddlewares.checkIsOrderDataNotEmptyMiddleware,
  orderControllers.createOrder
);

module.exports = router;
