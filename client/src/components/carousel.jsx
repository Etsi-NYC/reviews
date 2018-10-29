import React from "react";
import Slider from "react-slick";
import styled from 'styled-components';
// import "./../../../node_modules/slick-carousel/slick.css";
// import "./../../../node_modules/slick-carousel/slick-theme.css";
// import '../../dist/index.css'

class Carousel extends React.Component {
  render() {
    var settings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4
    };
    return (
        <Slider {...settings}>
          <div>
            <img src="https://static.pixlee.com/photos/230467187/medium/f805de892f64650e6bc9.jpg" />  
          </div>
          <div>
            <img src="https://di2ponv0v5otw.cloudfront.net/posts/2018/08/29/5b86f3508ad2f9f7e7704240/m_5b86f3601b16dbab44142290.jpg" />
          </div>
          <div>
            <img src="https://www.americancowboy.com/.image/t_share/MTQ1MDQxNzMxNDQwNzQ4MjYx/boots.jpg" />
          </div>
          <div>
            <img src="http://www.medodeal.com/wp-content/uploads/2017/10/western-boots-fancybox-bmtuesq-.jpg" />
          </div>  
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
        </Slider>
    );
  }
}

export default Carousel;