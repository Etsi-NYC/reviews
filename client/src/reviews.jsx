import React from 'react';
import ReactDOM from 'react-dom';
import Review from './components/review.jsx';
import StarRating from './components/starRating.jsx';
import Carousel from './components/carousel.jsx'
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import axios from 'axios';
let styled = window.styled;

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

.StyledDiv1 {
  width: 100%;
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
  line-height: 1.57rem;
  padding-top: 1.5rem;
}


.ReviewDiv {
  display: block;
}


.Header {
  padding-bottom: 1.28em;
}


.Title {
  display: inline-block;
  font-weight: bold;
  margin-right: .83rem;
  font-size: 1rem;
}

.AggregateRating {
  margin-right: .83rem;
}

.Count {
  color: #595959;
  font-size: .875rem;
  top: -0.2rem;
  position: relative;
}

.ReviewsList = {
  position: relative; 
  div:nth-child(n + 5)  {
    display: ${props => props.showMore ? 'block' : 'none'};
  };
}

.FadeGradient {
  display: ${props => props.visible ? 'block' : 'none'};
  position:absolute;
  z-index:2;
  right:0; bottom:0; left:0;
  height:6rem;
  background: url(data:image/svg+xml;base64,alotofcodehere);
  background: -moz-linear-gradient(top,  rgba(255,255,255,0) 0%, rgba(255,255,255,1) 70%);
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(255,255,255,0)), color-stop(70%,rgba(255,255,255,1)));
  background: -webkit-linear-gradient(top,  rgba(255,255,255,0) 0%,rgba(255,255,255,1) 70%);
  background: -o-linear-gradient(top,  rgba(255,255,255,0) 0%,rgba(255,255,255,1) 70%);
  background: -ms-linear-gradient(top,  rgba(255,255,255,0) 0%,rgba(255,255,255,1) 70%);
  background: linear-gradient(to bottom,  rgba(255,255,255,0) 0%,rgba(255,255,255,1) 70%);
}

.MoreLink {
  display: ${props => props.visible ? 'block' : 'none'}; 
  font-size: 1rem;
  font-weight: bold;
  text-decoration: underline;
  color: black;
  cursor: pointer;
  :hover {
    color: #595959;
  }
}

.AllReviewsButton {
  background: black;
  color: white;
  display: ${props => props.visible ? 'block' : 'none'}; 
  padding: 0.57rem 0.86rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 0.21rem; 
  cursor: pointer;
  border: black;
}

.PhotosFromReviewsTitle {
  font-size: 1rem;
  padding: 1.28rem 0 0.86rem 0;
  font-weight: 500;
} 

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false,
      reviews: [{date: ''}],
      reviewImages: []
    };
    this.handleShowMoreClick = this.handleShowMoreClick.bind(this);
  }
  componentDidMount() {
    let id = window.location.pathname.slice(9);
    axios.get('http://ec2-18-191-75-80.us-east-2.compute.amazonaws.com/reviews', {
      params: { id }
    })
    .then((response) => {
      this.setState({
        reviews: response.data.reviews,
        averageRating: response.data.averageRating,
        reviewImages: response.data.imagePaths,
        reviewCount: response.data.reviewCount
      }); 
    })
    .catch((err) => console.log(err));
  }
  handleShowMoreClick() {
    this.setState(prevState => ({
      showMore: !prevState.showMore
    }))
  }
  render() {
    return (
      <div className="StyledDiv1">
        <div className="Header">
          <div className="Title">Reviews</div><span className="AggregateRating"><StarRating rating={this.state.averageRating}/></span><span className="Count">({this.state.reviewCount})</span>
        </div>
        <ul>showMore={this.state.showMore}>
          {this.state.reviews.map((review, idx) => <div className="ReviewDiv" key={idx}><Review review={review}/></div>)}
          <div visible={!this.state.showMore}></div>
        </ul> 
        <a className="MoreLink" onClick={this.handleShowMoreClick} visible={!this.state.showMore}>+ More</a>
        <button className="AllReviewsButton" visible={this.state.showMore} href='/'>Read All Reviews ({this.state.reviewCount})</button>
        <div className="PhotosFromReviewsTitle">Photos from reviews</div>
        <Carousel photos={this.state.reviewImages}></Carousel>
      </div>
    )
  }
}

module.exports = {
  Reviews,
  MoreLink,
  AllReviewsButton,
  ReviewDiv
}

