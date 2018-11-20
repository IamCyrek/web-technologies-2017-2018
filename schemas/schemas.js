const Joi = require('joi');
const constants = require('../config/constants');

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

    sortSchema: Joi.object().keys({
      field: Joi.string().required(),
    }),

    sortWithDirectionSchema: Joi.object().keys({
      field: Joi.string().required(),
      direction: Joi.string().valid(constants.ASCENDING_ORDER, constants.DESCENDING_ORDER)
        .required(),
    }),
  },
};
