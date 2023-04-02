import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
const { Schema, model } = mongoose;
const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, 'Email address is required.'],
  },
  password: {
    type: String,
    required: [true, 'Password is required.'],
  },
  accessToken: {
    type: String,
    unique: true,
    default: null,
    required: [true, 'Access token is required.'],
  },
  refreshToken: {
    type: String,
    unique: true,
    default: null,
    required: [true, 'Refresh token is required.'],
  },
});

userSchema.pre('save', function (next) {
  if (this.isModified('password')) {
    const salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
  }
  next();
});

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

export default model('User', userSchema);
