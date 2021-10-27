import React from 'react';
import { Link } from 'react-router-dom';
import "./Main.css";

function MainCategory3() {
  const img = "/image/main_category3.png";

  return (
    <div className="main-content">
      <div className="main-category-left">
        <img src={img} alt="MBTI" className="main-category-img" />
      </div>
      <div className="main-category-right">
        <div>
          <h2 className="main-category-title">웹툰 MBTI</h2>
          <h5>나와 맞는 웹툰은 무엇일까요?</h5>
        </div>
        <Link to="/test">
          <button className="main-btn"><h4>Go to Recommend</h4></button>
        </Link>
      </div>
    </div>
  )
}

export default MainCategory3