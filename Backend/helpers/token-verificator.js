const jwt = require("jsonwebtoken");

const { JWT_SECRET, JWT_METHOD } = require("../constants");

module.exports = (res, next, token, method) => {
  if (method === JWT_METHOD.ADMIN) {
    jwt.verify(token, JWT_SECRET.ADMIN_ACCESS, (err) => {
      if (err) {
        return next(
          res
            .status(403)
            .json({ error: "Невірний токен або його дія закінчилася" })
        );
      }
    });
  }

  if (method === JWT_METHOD.USER) {
    jwt.verify(token, JWT_SECRET.ACCESS, (err) => {
      if (err) {
        return next(
          res
            .status(403)
            .json({ error: "Невірний токен або його дія закінчилася" })
        );
      }
    });
  }
};
