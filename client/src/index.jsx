import React from 'react';
import ReactDOM from 'react-dom';
import {Review, StyledWrapper} from './components/review.jsx';
import styled from 'styled-components';
import StarRating from './components/starRating.jsx';
import Carousel from './components/carousel.jsx'
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import axios from 'axios'

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
`

const StyledDiv = styled.div`
  width: 70%;
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
  line-height: 1.57rem;
  padding-top: 1.5rem;
`

const ReviewDiv = styled.div`
  display: block;
`

const Header = styled.div`
  padding-bottom: 1.28em;
`
const Title = styled.div`
  display: inline-block;
  font-weight: bold;
  margin-right: .83rem;
  font-size: 1rem;
`

const AggregateRating = styled.span`
  margin-right: .83rem;
  
`

const Count = styled.span`
  color: #595959;
  font-size: .875rem;
  top: -0.2rem;
  position: relative;
`

const ReviewsList = styled.ul`
  position: relative; 
  & ${ReviewDiv}:nth-child(n + 5)  {
    display: ${props => props.showMore ? 'block' : 'none'};
  };
`

const FadeGradient = styled.div`
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
`

const MoreLink = styled.a`
  display: ${props => props.visible ? 'block' : 'none'}; 
  font-size: 1rem;
  font-weight: bold;
  text-decoration: underline;
  color: black;
  cursor: pointer;
  :hover {
    color: #595959;
  }
`

const AllReviewsButton = styled.button`
  background: black;
  color: white;
  display: ${props => props.visible ? 'block' : 'none'}; 
  padding: 0.57rem 0.86rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 0.21rem; 
  cursor: pointer;
  border: black;
`

const PhotosFromReviewsTitle = styled.div`
  font-size: 1rem;
  padding: 1.28rem 0 0.86rem 0;
  font-weight: 500;
`

const PhotofromReviews = styled.img`
  padding: 0rem 1.29rem 0.64rem 0;
  float: left;
  width: 7.11rem;
  height: auto;
`

const nums = [1,2,3,4,5,6,7,8];

const photos = [1,2,3,4];

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
    axios.get('/reviews', {
      params: {
        id: 1
      }
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
      <React.Fragment>
        <GlobalStyle/>
        <StyledDiv>
          <Header>
            <Title>Reviews</Title><AggregateRating><StarRating rating={this.state.averageRating}/></AggregateRating><Count>({this.state.reviewCount})</Count>
          </Header>
          <ReviewsList showMore={this.state.showMore}>
            {this.state.reviews.map((review) => <ReviewDiv><Review review={review}/></ReviewDiv>)}
            <FadeGradient visible={!this.state.showMore}/> 
          </ReviewsList>
          <MoreLink onClick={this.handleShowMoreClick} visible={!this.state.showMore}>+ More</MoreLink>
          <AllReviewsButton visible={this.state.showMore} href='/'>Read All Reviews ({this.state.reviewCount})</AllReviewsButton>
          <PhotosFromReviewsTitle>Photos from reviews</PhotosFromReviewsTitle>
          <Carousel photos={this.state.reviewImages}></Carousel>
        </StyledDiv>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<Reviews />, document.getElementById('reviews'));

