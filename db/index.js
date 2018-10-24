var knex = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'root',
    password : '',
    database : 'etsi_reviews'
  }
});

knex.schema.dropTableIfExists('items')
  .then(() => {
    console.log('items table dropped')
    knex.schema.createTable('items', (table) => {
      table.string('name');
      table.integer('id').primary();
      table.string('image_path');
    })
      .then((table) => {
        console.log('items table created');
        knex('items').insert({name:'Birdhouse', id:1, image_path: 'www.google.com/birdhouseimage'})
          .then(() => {
            console.log('item inserted')
            knex.schema.dropTableIfExists('reviews')
            .then(() => {
              knex.schema.createTable('reviews', (table) => {
                table.string('username');
                table.date('date');
                table.decimal('rating');
                table.string('comment');
                table.integer('item_id');
                table.foreign('item_id').references('id').inTable('items');
              })
                .then((table) => {
                  console.log('reviews table created');
                  knex('reviews').insert({username: 'Josh', date: '1991-01-01', rating: 4.5, comment: 'this is a comment', item_id: 1})
                    .then((insertId) => console.log(`review inserted at row ${insertId}`))
                })
            })
          });
      })
  })






