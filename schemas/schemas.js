const Joi = require('joi');

module.exports = {
  validateParams: schema => (req, res, next) => {
    const result = Joi.validate(req.params, schema);
    if (result.error) {
      res.status(400).json(result.error);
    } else {
      next();
    }
  },

  schemas: {
    idSchema: Joi.object().keys({
      id: Joi.number().integer().min(0).required(),
    }),

    nameSchema: Joi.object().keys({
      name: Joi.string().required(),
    }),

    pagSchema: Joi.object().keys({
      offset: Joi.number().integer().min(0).required(),
      limit: Joi.number().integer().min(1).max(10)
        .required(),
    }),
  },
};
