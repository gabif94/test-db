const {Sequelize} = require('sequelize');

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize('testdb', 'postgres', 'acatupassword', {
	host: 'localhost',
	dialect: 'postgres',
});

module.exports = sequelize;
