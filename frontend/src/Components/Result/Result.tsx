import React, { useState } from "react";
import ResultBottom from "./ResultBottom";
import "./Result.css";

function Result() {
  const [ storyLength, setStoryLength ] = useState("short");

  const webtoonInfo = {"id": 123, "author1": "섭이", "author2": "섭이", 
    "platform": "네이버웹툰", "category": "액션", "title": "초인의 시대",
    "story": "지구에 근원 모를 괴물들이 출현하고 그들을 제압하는 '초인'들 또한 등장한다. 정체불명의 괴물과 초인, 바야흐로 '초인의 시대'가 도래한다!",
    "link": "https://comic.naver.com/webtoon/list?titleId=730694",
    "drawing_style": "현실성", "humor": "아재개그", 
    "emotion": "뭉클"}

  const goLink = () => {
    window.open(webtoonInfo["link"])
  }

  const showAllStory = () => {
    setStoryLength((storyLength) => "all")
  }

  const showShortStory = () => {
    setStoryLength((storyLength) => "short")
  }


  return (
    <div className="result">

      <div className="result-top">
        <div className="result-top-left">
          <div id="result-webtoon-img">이미지</div>
        </div>
        <div className="result-top-right">
          <div><h3>{ webtoonInfo["title"] }</h3></div>
          {webtoonInfo["author1"] !== webtoonInfo["author2"] ? 
            <div>
              <h5>
                <span className="fb">글</span> {webtoonInfo["author1"]}&nbsp;
                <span className="fb">그림</span> {webtoonInfo["author2"]} 
              </h5>
            </div> : 
            <div>
              <h5>
                <span className="fb">글/그림</span> {webtoonInfo["author1"]}&nbsp;
              </h5>
            </div>
          }
          <div><h5 className="fb">{ webtoonInfo["category"] }</h5></div>
          {storyLength === "short" ?
            <div>
              { webtoonInfo["story"].slice(0, 50) }...&nbsp;
              <span className="result-more" onClick={showAllStory}>더보기</span>
            </div> :
            <div>
              { webtoonInfo["story"] }&nbsp;&nbsp;
              <span className="result-more" onClick={showShortStory}>숨기기</span>
            </div>
          }          
          <div className="result-btns">
            <button className="result-btn" onClick={goLink}><h5>보러가기</h5></button>
            <button className="result-btn"><h5>팬 게시판</h5></button>
          </div>
        </div>
      </div>

      <div className="result-bottom">
        <ResultBottom />
      </div>

      <div className="mb-result-btns">
        <button className="result-btn" onClick={goLink}><h5>보러가기</h5></button>
        <button className="result-btn"><h5>팬 게시판</h5></button>
      </div>
    </div>
  )
};

export default Result;