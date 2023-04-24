const authorize = (roles = []) => {
  return async (req, res, next) => {
    try {
      const { role } = req.user || {};
      if (!role) {
        return res.status(400).json({
          success: false,
          message: 'Bad request.Role not found.',
        });
      }

      if (typeof roles === 'string') {
        roles = [roles];
      }

      if (!roles.includes(role)) {
        return res.status(401).json({
          success: false,
          message: 'Unauthorized access',
        });
      }

      next();
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message || 'Somehting went wrong.',
      });
    }
  };
};

export default authorize;
