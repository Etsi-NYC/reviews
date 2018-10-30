var expect = require('chai').expect;
var should = require('chai').should();
var axios = require('axios');

describe('Reviews API', function() {
  it('should return reviews data', function(done) {
    axios.get('http://127.0.0.1:3456/reviews', {
      params: {
        id: 1
      }
    })
    .then((response) => {
      should.exist(response.data.reviews);
      expect(response.data.reviews.length).to.equal(10);
      let review = response.data.reviews[0];
      should.exist(review.username);
      should.exist(review.profile_pic_path);
      should.exist(review.date);
      should.exist(review.rating);
      should.exist(review.item_id);
      should.exist(review.comment);
      should.exist(review.image_path);
      should.exist(review.name);
      should.exist(review.id);

      should.exist(response.data.averageRating);
      expect(response.data.averageRating).to.be.a('Number');

      should.exist(response.data.imagePaths);

      done();
    })
    .catch((err) => done(err))
  })
})