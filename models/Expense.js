const Sequelize = require('sequelize');
const db = require('../config/db');

const Expense = db.define('expense', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	expiration: Sequelize.DATE,
	description: Sequelize.STRING,
	owner: Sequelize.STRING,
});

module.exports = Expense;
