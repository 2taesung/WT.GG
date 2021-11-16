import React, { useState } from "react";
import ResultBottom from "./ResultBottom";
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import img from '../../../public/image/loading.gif'
import "./Result.css";

function Result() {
  const [ loading, setLoading ] = useState("load");
  
  let [webtoonInfo, setwebtoonInfo] = useState({"id": 485, "platform_id": 1, "title": "참교육", 
  "link": "https://comic.naver.com/webtoon/list?titleId=758037",
  "image_link": "../../../public/image/loading.gif",
  "genre": "스토리, 액션", "story": "줄거리", 
  "artist": "채용택 / 한가람", "score":9.833333333});
  // let [chk, setchk] = useState(0);

  let id = useParams();
  let webtoon_id:any = id;
  let w_id = webtoon_id['id'];
  w_id = 472
  // console.log(w_id)
  
  const fetchWebtoonDetail = async() => {
    await axios.get(`http://localhost:8080/webtoon/detail?id=${w_id}`)
    .then(res => {
      setwebtoonInfo({
        "id": res.data.webtoonDetail["id"], 
        "platform_id": res.data.webtoonDetail["platform_id"], 
        "title": res.data.webtoonDetail["title"], 
        "link": res.data.webtoonDetail["link"], 
        "image_link": res.data.webtoonDetail["image_link"], 
        "genre": res.data.webtoonDetail["genre"], 
        "story": res.data.webtoonDetail["story"],  
        "artist": res.data.webtoonDetail["artist"],  
        "score":res.data.webtoonDetail["score"], 
      })
      setLoading("endLoad")

    })
    .catch(err => {
      console.log("실패했습니다.")
      console.log(err)
    })
  }
  fetchWebtoonDetail()
  // console.log("arr")
  // console.log(arr)

  const goLink = () => {
    window.open(webtoonInfo["link"])
  }
  
  // console.log("다음 title")
  // console.log(webtoonInfo["title"])
  
  const loading_img = "/image/loading.gif";
  return (
    <div className="result">
      <div className={loading === "load" ? "loading" : "hide"}>
        <img src={loading_img} alt="laoding" />
      </div>
      <div className="result-top">
        <div className="result-top-left">
          <img src={ webtoonInfo['image_link'] } alt="" />
        </div>
        <div className="result-top-right">
          <div><h3>{ webtoonInfo["title"] }</h3></div>
          
          <div>
            <h5>
              <span className="fb">글/그림 :</span> {webtoonInfo["artist"]}&nbsp;
            </h5>
          </div>
          
          <div>
            <h5>
              <span className="fb">장르 :</span> {webtoonInfo["genre"]}&nbsp;
            </h5>
          </div>

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