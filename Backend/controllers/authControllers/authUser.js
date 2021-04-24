const UserModel = require("../../database/models/User");
const OAuthModel = require("../../database/models/OAuthToken");
const { tokenizer, checkPasswordHash } = require("../../helpers");
const { USER_ROLES, USER_STATUS, JWT_METHOD } = require("../../constants");

module.exports = async (req, res) => {
  try {
    const { phone, password } = req.body;

    const isUserPresent = await UserModel.find({
      phone: phone,
      role_id: USER_ROLES.USER,
    });

    if (isUserPresent[0] == undefined) {
      return res.status(404).json({
        success: false,
        data: null,
        errors: `Такого користувача не існує`,
      });
    }

    if (isUserPresent[0].status_id !== USER_STATUS.ACTIVE) {
      return res.status(403).json({
        success: false,
        data: null,
        errors: `Ваш акаунт заблокований`,
      });
    }

    await checkPasswordHash(isUserPresent[0].password, password);

    const tokens = tokenizer(JWT_METHOD.USER);

    const newOAuth = new OAuthModel({
      user_id: isUserPresent[0].id,
      ...tokens,
    });

    await newOAuth.save();

    res.status(200).json({
      success: true,
      data: tokens,
      errors: null,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      data: e.controller || "authUser",
      errors: e.message,
    });
  }
};
