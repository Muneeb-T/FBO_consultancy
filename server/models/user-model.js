import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
const { Schema, model } = mongoose;
const userSchema = new Schema({
  email: {
    type: String,
    unique: [true,'User already exists.'],
    required: [true, 'Email address is required.'],
  },
  password: {
    type: String,
    required: [true, 'Password is required.'],
  },
  accessToken: {
    type: String,
    default: null,
  },
  refreshToken: {
    type: String,
    default: null,
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
