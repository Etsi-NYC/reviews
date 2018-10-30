var axios = require('axios');

describe('Reviews API', function() {
  test('should return reviews data', function() {
    return axios.get('http://127.0.0.1:3456/reviews', {
      params: {
        id: 1
      }
    })
    .then((response) => {
      expect(response.data.reviews).toBeTruthy();
      expect(response.data.reviews.length).toEqual(10);
      let review = response.data.reviews[0];
      expect(review.username).toBeTruthy();
      expect(review.profile_pic_path).toBeTruthy();
      expect(review.date).toBeTruthy();
      expect(review.rating).toBeTruthy();
      expect(review.item_id).toBeTruthy();
      expect(review.comment).toBeTruthy();
      expect(review.image_path).toBeTruthy();
      expect(review.name).toBeTruthy();
      expect(review.id).toBeTruthy();

      expect(response.data.averageRating).toBeTruthy();
      let averageRatingType = typeof response.data.averageRating;
      expect(averageRatingType).toMatch(/number/);

      expect(response.data.imagePaths).toBeTruthy();

    })
    .catch((err) => console.log(err))
  })
})