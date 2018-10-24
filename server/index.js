const express = require('express');
const morgan = require('morgan');
const path = require('path')

const app = express();
var port = process.env.PORT || 3456;

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, './../client/dist')));

app.get('/', (req, res) => res.send('Hello world!'));

app.listen(port, () => console.log(`Server now listening on port ${port}`));