import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Result.css";

function ResultBottom() {
  const webtoonInfo = {"id": 123, "author1": "섭이", "author2": "섭이", 
    "platform": "네이버웹툰", "category": "액션", "title": "초인의 시대",
    "story": "지구에 근원 모를 괴물들이 출현하고 그들을 제압하는 '초인'들 또한 등장한다. 정체불명의 괴물과 초인, 바야흐로 '초인의 시대'가 도래한다!",
    "link": "https://comic.naver.com/webtoon/list?titleId=730694",
    "drawing_style": "현실성", "humor": "아재개그", 
    "emotion": "뭉클"}

  const chkImg = "/image/chk.png"

  return (
    <div className="result-bottom-container">
      <div className="result-bottom-left">
        <div className="result-avatar">아바타</div>
      </div>
      <Container className="result-bottom-right">
        <Row className="result-bottom-contents">
          <Col xs={4} className="result-bottom-title">
            <h5 className="fb">그림체</h5>
          </Col>
          <Col xs={8} className="result-bottom-item">
            <img src={chkImg} alt="chk" className="result-chk" />
            <div className="result-hr"/>
            <p>{webtoonInfo["drawing_style"]}</p>
          </Col>
        </Row>
        <Row className="result-bottom-contents">
          <Col xs={4} className="result-bottom-title">
            <h5 className="fb">개그</h5>
          </Col>
          <Col xs={8} className="result-bottom-item">
            <img src={chkImg} alt="chk" className="result-chk" />
            <div className="result-hr"/>
            <p>{webtoonInfo["humor"]}</p>
          </Col>
        </Row>
        <Row className="result-bottom-contents">
          <Col xs={4} className="result-bottom-title">
            <h5 className="fb">감동</h5>
          </Col>
          <Col xs={8} className="result-bottom-item">
            <img src={chkImg} alt="chk" className="result-chk" />
            <div className="result-hr"/>
            <p>{webtoonInfo["emotion"]}</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
};

export default ResultBottom;