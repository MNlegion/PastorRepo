const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// @desc: Register a new user
// @route: POST /api/users
// @access: Public
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;

    // Check if all fields are filled
    if(!username || !email || !password) {
        res.status(400);
        throw new Error("Please fill in all fields");
    }

    // Check if user already exists
    const userExists = await User.findOne({ email });

    if(userExists) {
        res.status(400);
        throw new Error("User already exists");
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    });

    if(user) {
        res.status(201).json({
            _id: user.id,
            username: user.username,
            email: user.email,
        })
    } else {
        res.status(400);
        throw new Error("Invalid user data");
    }
});

// @desc: Authenticate a user
// @route: POST /api/login
// @access: Public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login User" });
});

// @desc: Get User Profile
// @route: GET /api/users/me
// @access: Public
const getMe = asyncHandler(async (req, res) => {
  res.json({ message: "Profile Loaded Successfully" });
});

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
