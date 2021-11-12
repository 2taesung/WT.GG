import React from "react";
import { RootState } from '../../Redux/Reducers';
import { useSelector } from 'react-redux';
import "./Ranking.css";
import { Container, Row, Col } from "react-bootstrap";

function RankingContents() {
  const data = useSelector((state: RootState) => state.WebtoonReducer);
  const category = useSelector((state: RootState) => state.RankingReducer);

  var all = data.slice(0, 10)
  var naver = []
  var kakao = []

  var n_cnt = 0
  var k_cnt = 0
  for (let i=0; i<data.length; i++) {
    if (data[i]["platform_id"] === 1) {
      n_cnt += 1
      naver.push(data[i])
    }
    else if (data[i]["platform_id"] === 2) {
      k_cnt += 1
      kakao.push(data[i])
    }
    if (n_cnt >= 10 && k_cnt >= 10) {
      break
    }
  }

  // 카테고리 선택
  var contents = all
  if (category === "all") {
    contents = all
  } else if (category === "naver") {
    contents = naver.slice(0, 10)
  } else if (category === "kakao") {
    contents = kakao.slice(0, 10)
  }

  return (
    <Container>
      {contents.map((content: any, idx: number) => (
        <Row className="ranking-content" key={idx}>
          <Col className="ranking-rank"><h5>{idx+1}</h5></Col>
          <Col className="ranking-wi">
            {content["platform_id"] === 1 ? "네이버웹툰" : "카카오웹툰" }
            <div className="ranking-img"></div>
          </Col>
          <Col xs={7} className="ranking-body">
            <div>
              <h5>{content["title"]}</h5>
            </div>          
            <span className="fb">글 / 그림</span> {content["artist"]}&nbsp;            
          </Col>
          {/* <Col className="ranking-score">
            <h5>{content["score"]}</h5>
          </Col> */}
        </Row>
        ))}
    </Container>
  )
}

export default RankingContents;