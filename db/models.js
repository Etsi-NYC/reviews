var knex = require('./index.js');

const itemNameToId = (name) => {
  return new Promise((resolve, reject) => {
    knex.select('id').from('items').limit(1).where({name})
      .then((result) => resolve(result[0]['id']))
      .catch((err) => reject(err));
  });
}

const fetchReviewsById = (id) => {
  return new Promise((resolve, reject) => {
    knex.from('reviews').innerJoin('items', 'reviews.item_id', 'items.id').where({'items.id': id})
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  })
}

module.exports.itemNameToId = itemNameToId;
module.exports.fetchReviewsById = fetchReviewsById;