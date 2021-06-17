import express from 'express';
import validate from 'express-validation';

import * as salesController from '../controllers/sales/sales.controller';
import salesValidator from '../controllers/sales/sales.validator';

const router = express.Router();

//= ===============================
// API routes
//= ===============================
router.get('/:filter', salesController.findAll);
router.post(
	'/',
	validate(salesValidator),
	salesController.save,
);

module.exports = router;
