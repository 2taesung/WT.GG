import React, { Component } from "react";
import Slider from "react-slick";
import './slickstyle.css'; 
import './slick-theme.css';
import './Result.css';


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const dummy = "/image/dummy.png";
    return (
      <div>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
            <img className="s_img" src={dummy} alt="" />
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>

        </Slider>
      </div>
    );
  }
}