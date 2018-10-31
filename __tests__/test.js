var axios = require('axios');
import { shallow, mount, render } from 'enzyme';
import Reviews from '../client/src/reviews';
import React from 'react';
import Review from './../client/src/components/review';
import StarRating from './../client/src/components/starRating';
import Carousel from './../client/src/components/carousel'

describe('Front End', function() {
  test('should render a review component', () => {
    const wrapper = mount(<Reviews/>);
    expect(wrapper.find(Reviews).length).toEqual(1);
  })
});

describe('Reviews API', function() {
  test('should return reviews data', function() {
    return axios.get('http://localhost:3456/reviews', {
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