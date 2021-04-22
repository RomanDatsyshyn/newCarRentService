const { tokenVerificator } = require("../../helpers");
const { JWT_METHOD } = require("../../constants");

module.exports = async (req, res, next) => {
  const token = req.get("Authorization");

  if (!token) {
    return next(res.status(403).json({ error: "Немає токена" }));
  }

  tokenVerificator(token, JWT_METHOD.ADMIN);

  next();
};
