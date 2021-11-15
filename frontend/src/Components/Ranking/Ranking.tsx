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
            {category === "romance" ? "로맨스" : null}
            {category === "drama" ? "드라마 / 스토리" : null} 
            {category === "fantasy" ? "판타지" : null} 
            {category === "action" ? "액션" : null} 
            {category === "sexy" ? "성인" : null} 
          </h3>
        </div>
        <span className="ranking-selectboxs d-flex">
          <Form.Select name="platforms" className="platform-select" size="sm" onChange={onSelectCategory}>
            <option value="all">전체보기</option>
            <option value="romance">로맨스</option>
            <option value="drama">드라마 / 스토리</option>
            <option value="fantasy">판타지</option>
            <option value="action">액션</option>
            <option value="sexy">성인</option>
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