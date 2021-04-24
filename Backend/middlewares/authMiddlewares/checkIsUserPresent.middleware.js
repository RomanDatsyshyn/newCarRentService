const UserModel = require("../../database/models/User");

module.exports = async (req, res, next) => {
  const { phone } = req.body;

  const user = await UserModel.findOne({ phone: phone });

  if (!user) {
    return next(
      res.status(404).json({
        success: false,
        data: null,
        errors: `Користувача з таким номером не існує`,
      })
    );
  }

  next();
};
