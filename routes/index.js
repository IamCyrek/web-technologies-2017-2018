const express = require("express");
const controllers = require("../controllers/controllers");
const constants = require("../config/constants");
const { validateParams, schemas } = require("../schemas/schemas");

const router = express.Router();

router.get(constants.PATH_ALL, controllers.all);
router.get(
  constants.PATH_BY_ID,
  validateParams(schemas.idSchema),
  controllers.id
);
router.get(
  constants.PATH_BY_TITLE,
  validateParams(schemas.titleSchema),
  controllers.title
);
router.get(
  constants.PATH_BY_PAGINATION,
  validateParams(schemas.pagSchema),
  controllers.pagination
);
router.get(
  constants.PATH_BY_SORT,
  validateParams(schemas.sortSchema),
  controllers.sorting
);
router.get(
  constants.PATH_BY_SORT_WITH_DIRECTION,
  validateParams(schemas.sortWithDirectionSchema),
  controllers.sortingWithDirection
);

module.exports = router;
