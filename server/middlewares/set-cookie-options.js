const setCookieOptions = (req, res, next) => {
  res.cookie = (name, value, options) => {
    const cookieOptions = options || {};
    cookieOptions.sameSite = none;
    cookieOptions.secure = true;
    res.cookie(name, value, cookieOptions);
  };
  next();
};

export default setCookieOptions;
