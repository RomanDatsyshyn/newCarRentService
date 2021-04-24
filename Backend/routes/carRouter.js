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

router.put(
  "/edit/:id/town",
  carMiddlewares.checkIsCarPresentMiddleware,
  carMiddlewares.checkIsCarTownNotEmptyMiddleware,
  carControllers.editCarTown
);

router.put(
  "/edit/:id/price",
  carMiddlewares.checkIsCarPresentMiddleware,
  carMiddlewares.checkIsCarPriceNotEmptyMiddleware,
  carControllers.editCarPrice
);

router.put(
  "/edit/:id/segment",
  carMiddlewares.checkIsCarPresentMiddleware,
  carMiddlewares.checkIsCarSegmentNotEmptyMiddleware,
  carControllers.editCarSegment
);

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
