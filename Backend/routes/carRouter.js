const router = require("express").Router();

const { carControllers } = require("../controllers");
const { authMiddlewares, carMiddlewares } = require("../middlewares");

router.use(authMiddlewares.checkAdminTokenMiddleware);

router.post("/add", carMiddlewares.checkIsCarDataNotEmptyMiddleware);
// router.post("/", carControllers.addCar);

module.exports = router;
