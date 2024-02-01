// @desc: Register a new user
// @route: POST /api/users
// @access: Public
const registerUser = (req, res) => {
  res.json({ message: "User Registered" });
};

// @desc: Authenticate a user
// @route: POST /api/login
// @access: Public
const loginUser = (req, res) => {
  res.json({ message: "Login User" });
};

// @desc: Get User Profile
// @route: GET /api/users/me
// @access: Public
const getMe = (req, res) => {
  res.json({ message: "Profile Loaded Successfully" });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
