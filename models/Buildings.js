const Sequelize = require('sequelize');
const db = require('../config/db');
const Apartment = require('./Apartment');
const Expense = require('./Expense');

const Buildings = db.define('buildings', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	cata: Sequelize.STRING(20),
	floor: Sequelize.INTEGER,
	apartment: Sequelize.STRING(1),
});

Buildings.hasMany(Apartment);
Buildings.hasMany(Expense);

module.exports = Buildings;
