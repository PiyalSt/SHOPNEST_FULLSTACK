const User = require("../models/userModels");

const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already existing",
      });
    }

    const user = await User.create({ username, email, password });

    res.status(201).json({
      message: "User create successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Invalid Credentials",
      });
    }

    if (user.email !== email || user.password !== password) {
      return res.status(400).json({
        message: "Invalid Credentials",
      });
    }

    // console.log(user);

    res.status(201).json({
      message: "Login successfully completed!",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createUser,
  login,
};
