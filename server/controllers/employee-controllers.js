import userModel from '../models/user-model.js';
const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ success: false, message: 'Bad request' });

    let user = userModel(req.body);

    await user.save();

    user = { _id: user._id, email };

    res
      .status(201)
      .json({ success: true, user, message: 'User signed up successfully.' });
  } catch (error) {
    if (error?.code === 11000) {
      console.log(error);
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

export default {
  register,
};
