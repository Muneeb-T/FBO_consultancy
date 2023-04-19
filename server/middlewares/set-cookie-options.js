const setCookieOptions = (req, res, next) => {
  try {
    const domain = process.env.FRONTEND_URL;
    const commonOptions = {
      sameSite: 'none',
      secure: true,
      domain,
    };

    const originalCookie = res.cookie;
    res.cookie = function (name, value, options) {
      const newOptions = Object.assign({}, options, commonOptions);
      originalCookie.call(this, name, value, newOptions);
    };

    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong.',
    });
  }
};

export default setCookieOptions;
