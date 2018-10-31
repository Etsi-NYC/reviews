import React from "react";
import Slider from "react-slick";
import styled from 'styled-components';
// import "./../../../node_modules/slick-carousel/slick.css";
// import "./../../../node_modules/slick-carousel/slick-theme.css";
// import '../../dist/index.css'

class Carousel extends React.Component {
  render() {
    var settings = {
      dots: false,
      arrows: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4
    };
    return (
        <Slider {...settings}>
          {this.props.photos.map((photo, idx) => (
            <div key={idx}>
              <img src={photo} />  
            </div>
          )
          )}
        </Slider>
    );
  }
}

export default Carousel;