import React from 'react';
import ReactDOM from 'react-dom';
import Review from './components/review.jsx';
import styled from 'styled-components';
import StarRating from './components/starRating.jsx';

const StyledDiv = styled.div`
  width: 70%;
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
  line-height: 1.57rem;
  padding-top: 1.5rem;
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
  color: dimgrey;
  font-size: .875rem;
  top: -0.2rem;
  position: relative;
`


class Reviews extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <StyledDiv>
        <Header>
          <Title>Reviews</Title><AggregateRating><StarRating rating={3.5}/></AggregateRating><Count>(202)</Count>
        </Header>
        <Review/>
      </StyledDiv>
    )
  }
}

ReactDOM.render(<Reviews />, document.getElementById('reviews'));

