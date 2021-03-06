const { USER_STATUS } = require("../../constants");
const User = require("../../database/models/User");
const OAuthModel = require("../../database/models/OAuthToken");

module.exports = async (req, res) => {
  try {
    const { _id, status_id } = req.user;

    if (status_id === USER_STATUS.BLOCKED) {
      return res.json({
        success: false,
        data: null,
        errors: `Ви не можете заблокувати користувача, який вже заблокований`,
      });
    }

    await User.updateOne(
      { _id: _id },
      { $set: { status_id: USER_STATUS.BLOCKED } }
    );
    await OAuthModel.deleteOne({ user_id: _id });

    res.status(200).end();
  } catch (e) {
    res.json({
      success: false,
      data: e.controller || "blockUser",
      errors: e.message,
    });
  }
};
