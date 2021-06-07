const Sequelize = require('sequelize');
const db = require('../config/db');

const Tenant = db.define('tenants', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	user: {
		type: Sequelize.STRING(60),
		allowNull: false,
		validate: {
			isEmail: {
				msg: 'Invalid Email',
			},
			notEmpty: {
				msg: 'Email cannot be empty',
			},
		},
		unique: {
			args: true,
			msg: 'User already exists',
		},
	},
	password: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: {
				msg: 'Password cannot be empty',
			},
		},
	},
	apartment: Sequelize.STRING,
});

module.exports = Tenant;
