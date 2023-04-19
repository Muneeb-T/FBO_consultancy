const setCookieOptions = (req, res, next) => {
  try {
    const originalCookie = res.cookie;

    res.cookie = function (name, value, options) {
      const secure =
        options && options.secure !== undefined ? options.secure : true;
      const sameSite =
        options && options.sameSite !== undefined ? options.sameSite : 'none';

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
