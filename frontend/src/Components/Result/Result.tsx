import React, { useState, useEffect } from "react";
// import ResultBottom from "./ResultBottom";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import "./Result.css";
import "./Result.css";
import "./gauges.scss"
import "./gauges.js"
import "./fourgauges.scss"

function Result() {
  // const chkImg = "/image/chk.png"
  const [ loading, setLoading ] = useState("load");

  let [webtoonInfo, setwebtoonInfo] = useState({
    "id": 0, "platform_id": 0, "title": "", 
    "link": "",
    "image_link": "",
    "genre": "", 
    "story": "", 
    "drawing_style": 0,
    "humor": 0,
    "romance_ratio": 0,
    "genre_score": 0,
    "deployment_speed": 0,
    "material_novelty": 0,
    "artist": "", 
    "score": 0,
    "rate": 0
  });
  

  let id = useParams();
  let webtoon_id:any = id;
  let w_id = webtoon_id['id'];
  
  // console.log(w_id)
  // w_id = 472
  useEffect(()=> {
    axios
      .get(`http://54.166.95.144/api/detail?id=${w_id}`)
      .then(res => {
            setwebtoonInfo({
              "id": res.data.webtoonDetail["id"], 
              "platform_id": res.data.webtoonDetail["platform_id"], 
              "title": res.data.webtoonDetail["title"], 
              "link": res.data.webtoonDetail["link"], 
              "image_link": res.data.webtoonDetail["image_link"], 
              "genre": res.data.webtoonDetail["genre"], 
              "drawing_style": res.data.webtoonDetail["drawing_style"],
              "humor": res.data.webtoonDetail["humor"],
              "romance_ratio": res.data.webtoonDetail["romance_ratio"],
              "genre_score": res.data.webtoonDetail["genre_score"],
              "deployment_speed": res.data.webtoonDetail["deployment_speed"],
              "material_novelty": res.data.webtoonDetail["material_novelty"],
              "story": res.data.webtoonDetail["story"],  
              "artist": res.data.webtoonDetail["artist"],  
              "score":Math.round(res.data.webtoonDetail["score"]*100)/100, 
              "rate":res.data.webtoonDetail["score"]*10
            })
            // console.log(webtoonInfo)
            setLoading("endLoad")
          })
          .catch(err => {
            // console.log("실패했습니다.")
            console.log(err.response)
          });

  }, [w_id]);


  // console.log("arr")
  // console.log(arr)

  const goLink = () => {
    window.open(webtoonInfo["link"])
  }

  const class1 = `pie-wrapper progress-${webtoonInfo["drawing_style"]} style-2`
  const class2 = `pie-wrapper progress-${webtoonInfo["humor"]} style-2`
  const class3 = `pie-wrapper progress-${webtoonInfo["romance_ratio"]} style-2`
  const class4 = `pie-wrapper progress-${webtoonInfo["genre_score"]} style-2`
  const class5 = `pie-wrapper progress-${webtoonInfo["deployment_speed"]} style-2`
  const class6 = `pie-wrapper progress-${webtoonInfo["material_novelty"]} style-2`
  // console.log(class1)  
  // console.log("다음")
  // console.log(webtoonInfo['score'])
  // console.log(String(Math.floor(webtoonInfo["score"])))
  // console.log(w_score)

  const loading_img = "/image/loading.gif";
  const star = "/image/star.png";
  const star_f = "/image/star_f.png";

  return (
    <div className="result">
      <div className={loading === "load" ? "loading" : "hide"}>
        <img src={loading_img} alt="laoding" />
      </div>
      <div className="result-top">
        <div className="result-top-left">
          <img src={ webtoonInfo['image_link'] } id="result-webtoon-img" alt="" />
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
            <button className="result-btn" onClick={() => goLink}><h5>보러가기</h5></button>
            <Link to="/board">
              <button className="result-btn"><h5>팬 게시판</h5></button>
            </Link>
          </div>
        </div>
      </div>
      <div className="mb-result-btns">
        <button className="result-btn" onClick={() => goLink}><h5>보러가기</h5></button>
        <Link to="/board">
          <button className="result-btn"><h5>팬 게시판</h5></button>
        </Link>
      </div>

      <div className="result-bottom">
        <div className="result-bottom-container">
          
          <div className="rating">
            <div className="rating-bg">
              <img src={star} alt="star" className="rating-s" />
              <img src={star} alt="star" className="rating-s" />
              <img src={star} alt="star" className="rating-s" />
              <img src={star} alt="star" className="rating-s" />
              <img src={star} alt="star" className="rating-s" />
            </div>
            <div
              className="rating-body" 
              style={{
                width: `${webtoonInfo['rate']}%`,
                height: "100%",
                overflow: "hidden"
            }}>
              <div className="rating-star">
                <img src={star_f} alt="star_f" className="rating-s" />
                <img src={star_f} alt="star_f" className="rating-s" />
                <img src={star_f} alt="star_f" className="rating-s" />
                <img src={star_f} alt="star_f" className="rating-s" />
                <img src={star_f} alt="star_f" className="rating-s" />
              </div>
            </div>            
          </div>
          
          <div className="result-score">
            <h5 className="fb">{webtoonInfo["score"]}/10</h5>
          </div>

          <div className="set-size charts-container">
            <div className={class1}>
              <span className="label">그림체지수<span className="smaller"></span></span>
              <div className="pie">
                <div className="left-side half-circle"></div>
                <div className="right-side half-circle"></div>
              </div>
              <div className="shadow"></div>
            </div>

            <div className={class2}>
              <span className="label">유머지수<span className="smaller"></span></span>
              <div className="pie">
                <div className="left-side half-circle"></div>
                <div className="right-side half-circle"></div>
              </div>
              <div className="shadow"></div>
            </div>

            <div className={class3}>
              <span className="label">로맨스지수<span className="smaller"></span></span>
              <div className="pie">
                <div className="left-side half-circle"></div>
                <div className="right-side half-circle"></div>
              </div>
              <div className="shadow"></div>
            </div>
            
            <div className={class4}>
              <span className="label">장르적합도<span className="smaller"></span></span>
              <div className="pie">
                <div className="left-side half-circle"></div>
                <div className="right-side half-circle"></div>
              </div>
              <div className="shadow"></div>
            </div>
            
            <div className={class5}>
              <span className="label">전개속도<span className="smaller"></span></span>
              <div className="pie">
                <div className="left-side half-circle"></div>
                <div className="right-side half-circle"></div>
              </div>
              <div className="shadow"></div>
            </div>

            <div className={class6}>
              <span className="label">소재창의성<span className="smaller"></span></span>
              <div className="pie">
                <div className="left-side half-circle"></div>
                <div className="right-side half-circle"></div>
              </div>
              <div className="shadow"></div>
            </div>
          </div>          
        </div>
      </div>
    </div>
  )
};

export default Result;