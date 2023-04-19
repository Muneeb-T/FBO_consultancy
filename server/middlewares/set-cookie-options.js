const setCookieOptions = (req, res, next) => {
  try {
    const originalCookie = res.cookie;
    res.cookie = function (name, value, options) {
      let { secure, sameSite, domain } = options;
      secure = secure || true;
      sameSite = sameSite || 'none';
      domain = domain || process.env.FRONTEND_URL;
      const newOptions = Object.assign({}, options, { sameSite, secure });
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
