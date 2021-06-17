/* eslint-disable max-len */
import moment from 'moment';
// eslint-disable-next-line
import { sales, Sequelize } from '../../models';
import { successResponse, errorResponse } from '../../helpers';

export const save = async (req, res) => {
	try {
		const {
			userName, amount, date,
		} = req.body;

		const payload = {
			userName,
			amount,
			date,
		};

		const newSale = await sales.create(payload);
		return successResponse(req, res, newSale);
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};

export const findAll = async (req, res) => {
	try {
		const {
			filter,
		} = req.params;
		const whereCondition = {};
		if (filter === 'daily') {
			whereCondition.date = { [Sequelize.Op.lte]: moment().startOf('day'), [Sequelize.Op.lte]: moment().endOf('day') };
		} else if (filter === 'weekly') {
			whereCondition.date = { [Sequelize.Op.lte]: moment().startOf('week'), [Sequelize.Op.lte]: moment().endOf('week') };
		} else if (filter === 'monthly') {
			whereCondition.date = { [Sequelize.Op.lte]: moment().startOf('month'), [Sequelize.Op.lte]: moment().endOf('month') };
		}
		const newSale = await sales.findAll(whereCondition);
		const response = [];
		// eslint-disable-next-line no-plusplus
		for (let i = 0; i < newSale.length; i++) {
			if (filter === 'daily') {
				const index = response.findIndex(data => new Date(data.minute).getMinutes() === new Date(newSale[i].date).getDay());
				if (index < -1) {
					response[index].amount += newSale[i].amount;
				} else {
					response.push({ minute: new Date(newSale[i].date).getMinutes(), sum: newSale[i].amount });
				}
			} else if (filter === 'weekly') {
				const index = response.findIndex(data => new Date(data.day).getDay() === new Date(newSale[i].date).getDay());
				if (index < -1) {
					response[index].amount += newSale[i].amount;
				} else {
					response.push({ day: new Date(newSale[i].date).getDay(), sum: newSale[i].amount });
				}
			} else if (filter === 'monthly') {
				const index = response.findIndex(data => new Date(data.date).getDate() === new Date(newSale[i].date).getDate());
				if (index < -1) {
					response[index].amount += newSale[i].amount;
				} else {
					response.push({ date: new Date(newSale[i].date).getDate(), sum: newSale[i].amount });
				}
			}
		}
		return successResponse(req, res, response);
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};
