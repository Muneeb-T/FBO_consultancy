import userModel from '../models/user-model.js';
import createToken from '../utils/create-token.js';

const signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ success: false, message: 'Bad request' });

    let user = userModel(req.body);
    const tokenData = { userId: user._id };

    user.accessToken = createToken(tokenData, '5m');
    user.refreshToken = createToken(tokenData, '30d');

    await user.save();

    res.cookie('access-token', user.accessToken);
    res.cookie('refresh-token', user.refreshToken);

    user = { _id: user._id, email };

    res
      .status(201)
      .json({ success: true, user, message: 'User signed up successfully.' });
  } catch (error) {
    if (error?.code === 11000 && error?.keyPattern?.email) {
      return res
        .status(409)
        .json({ success: false, message: 'User already exists.' });
    }

    if (error.name === 'ValidationError') {
      const errors = {};
      Object.entries(error.errors).forEach(([key, value]) => {
        errors[key] = value.message;
      });
      return res.status(400).json({ success: false, message: errors });
    }

    res.status(500).json({
      success: false,
      message: error.message || 'Internal server error.',
    });
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ success: false, message: 'Bad request' });

    let user = await userModel.findOne({ email });

    if (!user || !user.comparePassword(password))
      return res
        .status(401)
        .json({ success: false, message: 'Invalid username or password.' });

    const tokenData = { userId: user._id };

    user.accessToken = createToken(tokenData, '5m');
    user.refreshToken = createToken(tokenData, '30d');

    await user.save();

    res.cookie('access-token', user.accessToken);
    res.cookie('refresh-token', user.refreshToken);

    user = { _id: user._id, email };

    res
      .status(201)
      .json({ success: true, user, message: 'User logged in successfully.' });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || 'Internal server error.',
    });
  }
};
const logout = async (req, res) => {};

export default {
  signup,
  login,
  logout,
};
