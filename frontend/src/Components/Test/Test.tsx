import React, { Component } from "react";
import Slider from "react-slick";
import './slickstyle.css'; 
import './slick-theme.css';
import './Test.css';
import TestCard from './TestCard';


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="Test-bg">
        <Slider {...settings}>
          <div>
            <TestCard></TestCard>
          </div>
          <div>
            <h3>2</h3>
          </div>

        </Slider>
      </div>
    );
  }
}