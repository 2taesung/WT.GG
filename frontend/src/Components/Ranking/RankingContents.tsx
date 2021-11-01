import React from "react";
import "./Ranking.css";
import { Container, Row, Col } from "react-bootstrap";

function RankingContents() {
  const contents = [
    {"website": "네이버웹툰", "title": "독립일기", "writer1": "자까", "writer2": "자까", "score": 98},
    {"website": "카카오웹툰", "title": "190cm의 헬스광 황성안,이 세계에서 바람에 쓰러지다?!", "writer1": "흑염룡", "writer2": "은지", "score": 97},
    {"website": "레진코믹스", "title": "탈모탈모빔", "writer1": "이태성", "writer2": "강대영", "score": 93}
  ]

  return (
    <Container>
      {contents.map((content, idx) => (
        <Row className="ranking-content" key={idx}>
          <Col className="ranking-rank"><h5>{idx+1}</h5></Col>
          <Col className="ranking-wi">
            {content["website"]}
            <div className="ranking-img"></div>
          </Col>
          <Col xs={7} className="ranking-body">
            <div>
              <h5>{content["title"]}</h5>
            </div>
            {content["writer1"] !== content["writer2"] ? 
              <div>
                <span className="fb">글</span> {content["writer1"]}&nbsp;
                <span className="fb">그림</span> {content["writer2"]} 
              </div> : 
              <div>
                <span className="fb">글/그림</span> {content["writer1"]}&nbsp;
              </div>
            }
            
          </Col>
          <Col className="ranking-score">
            <h5>{content["score"]}</h5>
          </Col>
        </Row>
        ))}
    </Container>
  )
}

export default RankingContents;