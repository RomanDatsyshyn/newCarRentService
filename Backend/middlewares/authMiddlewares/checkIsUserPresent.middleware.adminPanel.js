const UserModel = require("../../database/models/User");

module.exports = async (req, res, next) => {
  const { user_id } = req.params;

  const user = await UserModel.findById(user_id);

  if (!user) {
    return next(res.status(404).json({ error: `Немає такого користувача` }));
  }

  req.user = user;

  next();
};
