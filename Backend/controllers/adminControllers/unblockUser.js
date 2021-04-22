const { USER_STATUS } = require("../../constants");
const User = require("../../database/models/User");
const OAuthModel = require("../../database/models/OAuthToken");

module.exports = async (req, res) => {
  try {
    const { _id, status_id } = req.user;

    if (status_id === USER_STATUS.ACTIVE) {
      return res
        .status(403)
        .json({ error: `Ви не можете розбанити вже активного користувача` });
    }

    await User.updateOne(
      { _id: _id },
      { $set: { status_id: USER_STATUS.ACTIVE } }
    );
    await OAuthModel.deleteOne({ user_id: _id });

    res.end();
  } catch (e) {
    res.json({
      message: e.message,
      controller: e.controller || "unblockUser",
    });
  }
};
