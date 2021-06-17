import Joi from 'joi';

const save = {
	body: {
		userName: Joi.string().required(),
		amount: Joi.number().required(),
		date: Joi.date().required(),
	},
};

export default save;
