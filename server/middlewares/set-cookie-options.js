const setCookieOptions = (req, res, next) => {
  res.header('Set-Cookie', `SameSite=None; Secure`);
  next();
};

export default setCookieOptions;
