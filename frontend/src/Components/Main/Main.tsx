import React from 'react';
import { Link } from "react-router-dom";

import "./Main.css";

function Main() {
  return (
    <div className="main">
      <Link to="/board">
        <button>게시판</button>
      </Link>
      <Link to="/test">
        <button>MBTI형 추천</button>
      </Link>
      <br/>
      메인화면
    </div>
  )
}

export default Main;