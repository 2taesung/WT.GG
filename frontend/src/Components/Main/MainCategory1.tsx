import React from 'react';
import { Link } from 'react-router-dom';
import "./Main.css";

function MainCategory1() {
  const img = "/image/main_category1.png";

  return (
    <div className="main-content">
      <div className="main-category-left">
        <img src={img} alt="트로피" className="main-category-img" />
      </div>
      <div className="main-category-right">
        <div>
          <h2 className="main-category-title">웹툰 명예의 전당</h2>
          <h5>요즘 인기있는 웹툰은 무엇일까요?</h5>
        </div>
        <Link to="/ranking">
          <button className="main-btn"><h4>Go to Ranking</h4></button>
        </Link>
      </div>
    </div>
  )
}

export default MainCategory1