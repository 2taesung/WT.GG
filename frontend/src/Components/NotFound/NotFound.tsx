import React from 'react';
import { Link } from 'react-router-dom';
import "./NotFound.css";

function NotFound() {
  const img = "/image/404.gif"

  return (
    <div className="not-found">
      <h1>404</h1>
      <h1>Not Found</h1>
      <div className="not-found-mid">
        <Link to="/">
          <img id="not-found-img" src={img} alt="404" />
        </Link>
        <p id="not-found-img-text">고양이를 클릭하면<br/> 메인화면으로 갑니다.</p>
      </div>
      <div className="not-found-bottom">
        <h5>존재하지 않는 페이지 입니다.</h5>
        <h5>This page does not exist.</h5>
      </div>
    </div>
  )
}

export default NotFound;