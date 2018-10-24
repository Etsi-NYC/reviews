const express = require('express');
const morgan = require('morgan');
const path = require('path');
const models = require('./../db/models');

const app = express();

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, './../client/dist')));

app.get('/', (req, res) => res.send('Hello world!'));

app.get('/reviews', (req, res) => {
  console.log(req.query.id);
  if (!req.query.id && !req.query.name) res.status(400).send('Must include either item ID or item name in query')
  if (!req.query.id) {
    models.itemNameToId(req.query.name)
      .then((id) => {
        return models.fetchReviewsById(id)
      })
      .then((reviews) => res.send(reviews));
  } else {
    models.fetchReviewsById(req.query.id)
      .then((reviews) => res.send(reviews));
  }
})

var port = process.env.PORT || 3456;
app.listen(port, () => console.log(`Server now listening on port ${port}`));