import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import ChkCategory from '../../Redux/Actions/RankingAction';

import RankingContents from './RankingContents';
import { Form } from "react-bootstrap";
import "./Ranking.css";

function Ranking() {
  window.scrollTo(0, 0);

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
            {category === "ramance" ? "로맨스" : null}
            {category === "drama" ? "드라마" : null} 
            {category === "life" ? "일상" : null} 
            {category === "action" ? "액션" : null} 
            {category === "thriller" ? "스릴러" : null} 
          </h3>
        </div>
        <span className="ranking-selectboxs d-flex">
          <Form.Select name="platforms" className="platform-select" size="sm" onChange={onSelectCategory}>
            <option value="all">전체보기</option>
            <option value="ramance">로맨스</option>
            <option value="drama">드라마</option>
            <option value="life">일상</option>
            <option value="action">액션</option>
            <option value="thriller">스릴러</option>
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