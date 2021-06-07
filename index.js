const express = require('express');
const db = require('./config/db');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

require('./models/Partnership');

db.sync()
	.then(() => console.log('connection successfull'))
	.catch(err => console.log(err));

app.use('/', routes());

app.listen(3001);
