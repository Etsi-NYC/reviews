let dummyData = require('./dummyData');

var knex = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'root',
    password : '',
    database : 'etsi_reviews'
  }
});

console.log('about to create tables');

knex.schema.hasTable('items').then((exists) => {
  if (!exists) {
    console.log('items table doesn\'t exist')
    knex.schema.createTable('items', (table) => {
      table.string('name');
      table.integer('id').primary();
      table.string('image_path');
    })
      .then((table) => {
        console.log('items table created');
        knex.batchInsert('items', dummyData.items)
          .then(() => {
            console.log('items inserted')
            knex.schema.hasTable('reviews').then((exists) => {
              if (!exists) {
                knex.schema.createTable('reviews', (table) => {
                  table.string('username');
                  table.string('profile_pic_path');
                  table.date('date');
                  table.decimal('rating');
                  table.integer('item_id');
                  table.foreign('item_id').references('id').inTable('items');
                  table.string('comment', 2000);
                  table.string('image_path');
                  table.integer('review_id');
                })
                  .then((table) => {
                    console.log('reviews table created');
                    knex.batchInsert('reviews', dummyData.reviews)
                      .then((ids) => console.log(`review inserted at row ${ids}`))
                  })
              }
            })
          })
      })
  }
});

module.exports = knex;







