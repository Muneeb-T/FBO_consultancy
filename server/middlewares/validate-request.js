const validate = (schema, property) => {
  return (req, res, next) => {
    try {
      if (!schema || !property)
        throw { message: 'Cannot validate request.missing schema or propery.' };

      const { error } = schema.validate(req[property]);
      const valid = error == null;
      if (valid) {
        next();
      } else {
        const { details } = error;
        const message = details.map((i) => i.message).join(',');
        res.status(422).json({ success: false, message });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message || 'Internal sever error',
      });
    }
  };
};

export default validate;
