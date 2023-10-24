const { User_Schema } = require("../model/user_model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const user_register = async (req, res) => {
  try {
    const user = await User_Schema.create({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
    });
    res.status(200).json({ success: true, data: user });
  } catch (err) {
    res.status(404).json({ success: false, error: err.message });
  }
};

const user_login = async (req, res) => {
  try {
    const user = await User_Schema.findOne({ username: req.body.username });
    if (!user) {
      res.status(404).json({ success: false, error: "User not found" });
    } else {
      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (!isMatch) {
        res.status(400).json({ success: false, error: "Wrong password" });
      } else {
        res.status(200).json({ success: true, message: "Login success" });
      }
    }
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

const user_change_password = async (req, res) => {
  try {
    const user = await User_Schema.findOne({ username: req.body.username });
    if (!user) {
      res.status(404).json({ success: false, error: "User not found" });
    } else {
      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (!isMatch) {
        res.status(400).json({ success: false, error: "Wrong password" });
      } else {
        await User_Schema.findOneAndUpdate(
          { username: req.body.username },
          { password: req.body.newPassword },
          { new: true }
        );
        res.json({ success: true, message: "Change password success" });
      }
    }
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
// http://localhost:3000/api/get-user?page=1
const user_get_user = async (req, res) => {
  const skip = parseInt(req.query.page);
  const data = await User_Schema.find().skip(skip).limit(1);
  res.json({ success: true, data: data });
};
module.exports = {
  user_register,
  user_login,
  user_change_password,
  user_get_user,
};
