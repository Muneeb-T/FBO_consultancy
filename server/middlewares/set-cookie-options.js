const setCookieOptions = (req, res, next) => {
  const originalCookie = res.cookie;
  res.cookie = function (name, value, options) {
    const newOptions = Object.assign({}, options, {
      sameSite: 'none',
      secure: true,
    });
    originalCookie.call(this, name, value, newOptions);
  };
};
export default setCookieOptions;
