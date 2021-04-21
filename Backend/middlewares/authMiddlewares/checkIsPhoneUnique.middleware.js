const UserModel = require("../../database/models/User");

module.exports = async (req, res, next) => {
  const { phone } = req.body;

  const user = await UserModel.findOne({ phone: phone });

  if (user) {
    return next(
      res.status(404).json({ error: `Користувач з таким номером вже існує` })
    );
  }

  next();
};
