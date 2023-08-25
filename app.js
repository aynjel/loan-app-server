require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 4000;

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const name = 'Loan App Server';
app.listen(port, () => {
    console.log(`${name} running on port ${port}`);
});