const { validationResult } = require("express-validator");

const validate = (validations) => {
  return async (req, res, next) => {
    for (let val of validations) {
      const result = await val.run(req);
      if (result.errors.length) break;
    }

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    return res.status(400).json({ errors: errors.array() });
  };
};

module.exports = { validate };
