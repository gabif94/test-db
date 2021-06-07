const Sequelize = require('sequelize');
const db = require('../config/db');
const Buildings = require('./Buildings');

const Partnership = db.define('partnerships', {
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
});

Partnership.hasMany(Buildings);

module.exports = Partnership;
