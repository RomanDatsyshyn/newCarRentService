const router = require("express").Router();

const { carControllers } = require("../controllers");
const { authMiddlewares, carMiddlewares } = require("../middlewares");

router.get("/", carControllers.getAll);
router.get(
  "/:id",
  carMiddlewares.checkIsCarPresentMiddleware,
  carControllers.getCarById
);

router.use(authMiddlewares.checkAdminTokenMiddleware);

router.delete(
  "/:id/delete",
  carMiddlewares.checkIsCarPresentMiddleware,
  carControllers.deleteCar
);

router.use(carMiddlewares.uploadCarImageMiddleware.single("carImage"));

router.post(
  "/add",
  carMiddlewares.checkIsCarDataNotEmptyMiddleware,
  carControllers.addCar
);

module.exports = router;
