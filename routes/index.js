const express = require('express');
const controllers = require('../controllers/controllers');
const constants = require('../config/constants');

const router = express.Router();

router.get(constants.PATH_ALL, controllers.all);
router.get(constants.PATH_BY_ID, controllers.id);
router.get(constants.PATH_BY_TITLE, controllers.title);
router.get(constants.PATH_BY_PAGINATION, controllers.pagination);
router.get(constants.PATH_BY_SORT, controllers.sorting);
router.get(constants.PATH_BY_SORT_WITH_DIRECTION, controllers.sortingWithDirection);

module.exports = router;
