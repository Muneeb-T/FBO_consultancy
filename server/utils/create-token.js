import jwt from 'jsonwebtoken';

export default (data, expiresIn) => {
  try {
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret || !data || !expiresIn) {
      const values = { jwtSecret, data, expiresIn };
      const falseValues = Object.keys(values).filter((keys) => !values[keys]);
      throw {
        message: `Can't create token. Missing ${falseValues}.`,
      };
    }

    return jwt.sign(data, jwtSecret, { expiresIn });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
