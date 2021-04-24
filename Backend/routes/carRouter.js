const router = require("express").Router();

const { carControllers } = require("../controllers");
const { authMiddlewares, carMiddlewares } = require("../middlewares");

router.get("/", carControllers.getAll);

router.use(authMiddlewares.checkAdminTokenMiddleware);

router.use(carMiddlewares.uploadCarImageMiddleware.single("carImage"));

router.post(
  "/add",
  carMiddlewares.checkIsCarDataNotEmptyMiddleware,
  carControllers.addCar
);

module.exports = router;
