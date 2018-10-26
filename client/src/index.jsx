import React from 'react';
import ReactDOM from 'react-dom';
import {Review, StyledWrapper} from './components/review.jsx';
import styled from 'styled-components';
import StarRating from './components/starRating.jsx';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

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
  font-size: 1rem;
  font-weight: bold;
  text-decoration: underline;
  color: black;
  :hover {
    color: #595959;
  }
`



const nums = [1,2,3,4,5,6,7,8];

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false
    };
    this.handleShowMoreClick = this.handleShowMoreClick.bind(this);
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
            <Title>Reviews</Title><AggregateRating><StarRating rating={3.5}/></AggregateRating><Count>(202)</Count>
          </Header>
          <ReviewsList showMore={this.state.showMore}>
            {nums.map((num) => <ReviewDiv><Review/></ReviewDiv>)}
            <FadeGradient/> 
          </ReviewsList>
          <MoreLink onClick={this.handleShowMoreClick}>+ More</MoreLink>
        </StyledDiv>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<Reviews />, document.getElementById('reviews'));

