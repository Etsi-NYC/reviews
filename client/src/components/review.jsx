import React from 'react';
import styled from 'styled-components';
import StarRating from './starRating.jsx';

const StyledWrapper = styled.div`
  border-bottom: 1px solid #e1e3df;
  padding-bottom: 1.29rem;
  overflow: auto;
`

const Author = styled.div`
  display: block;
  float:left;
  vertical-align: top;
  margin: auto;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding-right: 0.86rem;
  padding-bottom: 1.29rem;
  width: 25%;
`

const ProfilePic = styled.img`
  border-radius: 50%;
  display: block;
  width: 3rem;
  height: auto;
  margin: 0 auto;
  margin-bottom: 0.5rem;
`

const Details = styled.div`
  display: block;
  float: left;
  width: 72%;
`

const Comment = styled.div`
  margin-bottom: 0.86rem;
`

const Rating = styled.div`
  display: inline-block;
  vertical-align: center;
  padding-bottom: .5rem;
  padding-top: 0.2rem;
`

const Date = styled.span`
  float: right;
`

const Item = styled.div`
  display: -webkit-flexbox;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
`

const ItemPhoto = styled.img`
  width: 2.5rem;
  height: auto;
  padding-right: 0.86rem;
`

const ItemName = styled.div`
  display: inline-block;
  font-size: 0.87rem;
 
  // :hover {
  //   text-decoration: underline;
  // }
`
const Link = styled.a`
  :not(:hover) {
    text-decoration-line: none;
  }
  :visited {
    color: black;
  }
`

class Review extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StyledWrapper>
        <Author>
          <ProfilePic src="https://www.zooportraits.com/wp-content/uploads/2018/05/Koala-Phascolarctos-Cinereus.jpg" />
          <div>Reviewed by: <br></br><Link href='/'>Mr. Koala</Link></div>
        </Author>
        <Details>
          <div id='review_header'>
            <Rating><StarRating rating={4.5}/></Rating>
            <Date>Oct 23, 2018</Date>
          </div>
          <Comment>ex non occaecat nulla reprehenderit sunt veniam pariatur enim ad officia quis magna nisi laboris officia ex est labore nostrud duis nisi nisi ad ex qui minim est cupidatat qui commodo excepteur laborum</Comment>
          <Item>
            <ItemPhoto src="https://s3.us-east-2.amazonaws.com/hack-reactor-etsi/boots.JPG"/>
            <ItemName><Link href='/'>Boots</Link></ItemName>
          </Item>
        </Details>
      </StyledWrapper>
    )
  }
}

export default Review;