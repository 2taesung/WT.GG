import React from 'react';
import { Link } from 'react-router-dom';
import "./Main.css";

function MainCategory2() {
  const img = "/image/main_category2.png";

  return (
    <div className="main-content">
      <div className="main-category-left">
        <img src={img} alt="커뮤니티" className="main-category-img" />
      </div>
      <div className="main-category-right">
        <div>
          <h2 className="main-category-title">웹툰 커뮤니티</h2>
          <h5>웹툰 덕후들과 함께 소통하러 가볼까요?</h5>
        </div>
        <Link to="/board">
          <button className="main-btn"><h4>Go to Community</h4></button>
        </Link>
      </div>
    </div>
  )
}

export default MainCategory2