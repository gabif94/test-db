const Sequelize = require('sequelize');
const db = require('../config/db');
const Expense = require('./Expense');
const Tenant = require('./Tenant');

const Apartment = db.define('apartments', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	cata: Sequelize.STRING(20),
	description: Sequelize.STRING(100),
	owner: Sequelize.STRING(20),
	floor: Sequelize.INTEGER,
	mt2: Sequelize.INTEGER,
	expense: Sequelize.INTEGER,
});

Apartment.hasOne(Tenant);
Apartment.hasMany(Expense);

module.exports = Apartment;
