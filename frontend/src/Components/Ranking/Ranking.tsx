import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import ChkCategory from '../../Redux/Actions/RankingAction';

import RankingContents from './RankingContents';
import { Form } from "react-bootstrap";
import "./Ranking.css";

function Ranking() {
  const dispatch = useDispatch();
  const [category, setCategory]  = useState("all");

  const onSelectCategory = (e: any) => {
    dispatch(ChkCategory(e.target.value))
    setCategory(e.target.value)
  }
  
  return (
    <div className="ranking">
      <div className="ranking-header">
        <h2>Ranking</h2>
        <hr />
      </div>

      <div className="ranking-title">
        <div className="ranking-category">
          <h3>
            {category === "all" ? "All" : null} 
            {category === "naver" ? "네이버웹툰" : null}
            {category === "kakao" ? "카카오웹툰" : null} 
          </h3>
        </div>
        <span className="ranking-selectboxs d-flex">
          <Form.Select name="platforms" className="platform-select" size="sm" onChange={onSelectCategory}>
            <option value="all" onClick={onSelectCategory}>전체보기</option>
            <option value="naver">네이버</option>
            <option value="kakao">카카오</option>
          </Form.Select>
        </span>
      </div>
      
      <div className="ranking-contents">
        <RankingContents />
      </div>
    </div>
  )
}

export default Ranking;