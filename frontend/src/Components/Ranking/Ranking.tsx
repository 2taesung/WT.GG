import React from 'react';
import RankingContents from './RankingContents';
import { Form } from "react-bootstrap";
import "./Ranking.css";

function Ranking() {
  
  return (
    <div className="ranking">
      <div className="ranking-header">
        <h2>Ranking</h2>
        <hr />
      </div>

      <div className="ranking-title">
        <div className="ranking-category"><h3>All</h3></div>
        <span className="selectboxs d-flex">
          <Form.Select name="platforms" className="platform-select" size="sm">
            <option value="">전체보기</option>
            <option value="naver">네이버</option>
            <option value="kakao">카카오</option>
            <option value="lezhin">레진</option>
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