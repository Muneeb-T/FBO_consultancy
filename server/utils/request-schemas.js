import Joi from 'joi';

const schemas = {
  signup: Joi.object().keys({
    email: Joi.string().email().required().label('Email'),
    password: Joi.string().required().min(8).label('Password'),
    confirmPassword: Joi.string()
      .valid(Joi.ref('password'))
      .required()
      .label('Confirm Password'),
  }),
  login: Joi.object().keys({
    email: Joi.string().email().required().label('Email'),
    password: Joi.string().required().label('Password'),
  }),
};

export default schemas;
