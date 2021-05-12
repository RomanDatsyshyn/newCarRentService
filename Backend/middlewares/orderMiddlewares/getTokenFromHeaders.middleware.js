const { JWT_SECRET } = require("../../constants");

const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const token = req.get("Authorization");

  if (!token) {
    return next(
      res.json({
        success: false,
        data: null,
        errors: "Немає токена",
      })
    );
  } else {
    const decodedToken = jwt.verify(token, JWT_SECRET.ACCESS);

    if (decodedToken.id) {
      res.locals.id = decodedToken.id;
    }
  }

  next();
};
