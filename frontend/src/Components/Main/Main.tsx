import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChkCategory from '../../Redux/Actions/MainAction';
import { RootState } from '../../Redux/Reducers';
import MainCategory1 from './MainCategory1';
import MainCategory2 from './MainCategory2';
import MainCategory3 from './MainCategory3';

import "./Main.css";

function Main() {
  const mainCategory = useSelector((state: RootState) => state.MainReducer);
  const dispatch = useDispatch();

  // 카테고리 변경
  const clickCategory = (e: any) => {
    dispatch(ChkCategory(e.target.innerText))
  }

  if (mainCategory === "Ranking") {
    document.querySelector(".main-category-chk")?.classList.remove("main-category-chk")
    document.querySelector(".main-category-1")?.classList.add("main-category-chk")
  }
  else if (mainCategory === "Community") {
    document.querySelector(".main-category-chk")?.classList.remove("main-category-chk")
    document.querySelector(".main-category-2")?.classList.add("main-category-chk")
  }
  else {
    document.querySelector(".main-category-chk")?.classList.remove("main-category-chk")
    document.querySelector(".main-category-3")?.classList.add("main-category-chk")
  }

  // console.log(mainCategory)

  const main_img = "/image/main_img.png"
  const flower = "/image/flower.gif";

  return (
    <div className="main">      
      <div className="main-top">
        <div className="flower">
          <img className="flower-img" src={flower} alt ="flower" />
        </div>
        <div className="main-top-bg">
          <img id="main-img" src={main_img} alt="메인이미지" />
        </div>
        <div className="main-top-text">
          <h1>만화 보고 가지 않을래?</h1>
          <h3>
            Premium<br/>
            WEBTOON<br/>
            SERVICE<br/>
          </h3>
        </div>
      </div>

      <div className="main-bottom">
        <div className="main-categories">
          <h3 className="main-category-1 main-category-chk" onClick={clickCategory}>Ranking</h3>
          <h3 className="main-category-2" onClick={clickCategory}>Community</h3>
          <h3 className="main-category-3" onClick={clickCategory}>Recommend</h3>
        </div>
        <div className="main-contents">
          {mainCategory === "Ranking" ? (
            <MainCategory1 />
          ) : null}
          {mainCategory === "Community" ? (
            <MainCategory2 />
          ) : null}
          {mainCategory === "Recommend" ? (
            <MainCategory3 />
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default Main;