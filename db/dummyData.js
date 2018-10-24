var lorem = require('lorem-ipsum');


var items = [{
  name: 'Boots',
  id: 1,
  image_path: 'https://s3.us-east-2.amazonaws.com/hack-reactor-etsi/boots.JPG'
}, {
  name: 'Lasso',
  id: 2,
  image_path: 'https://s3.us-east-2.amazonaws.com/hack-reactor-etsi/lasso.jpg'
}];

var reviews = [];

for (let i = 0; i < 10; i++) {
  let username = ['Al', 'Bob', 'Charlie'][i % 3];
  let rating = [5, 3.5, 4, 4.5][i % 4];
  let comment = lorem({count: 100, units: 'words'});
  let item_id = [1,2][i % 2];
  reviews.push({
    username,
    date: '1991-01-01',
    rating,
    item_id,
    comment
  })
}

exports.items = items;
exports.reviews = reviews;