const request = require('supertest');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
app.use(morgan('dev'));
app.use(cors());

app.get('/test', (req, res) => {
	res.status(200).send('Hello World');
});

test('GET /test', async () => {
	const response = await request(app).get('/test');
	expect(response.statusCode).toBe(200);
	expect(response.text).toBe('Hello World');
});