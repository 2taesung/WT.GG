import React from "react";
import { RootState } from '../../Redux/Reducers';
import { useSelector } from 'react-redux';
import "./Ranking.css";
import { Container, Row, Col } from "react-bootstrap";

function RankingContents() {
  const data = useSelector((state: RootState) => state.WebtoonReducer);
  const category = useSelector((state: RootState) => state.RankingReducer);
  // console.log(data)

  var all = data.slice(0, 10)
  var romance_list = []
  var drama_list = []
  var fantasy_list = []
  var action_list = []
  var sexy_list = []

  for (let i=0; i<data.length; i++) {
    var temp = data[i]["genre"].split(",")
    if (temp.includes("로맨스")) {
      romance_list.push(data[i])
    }
    else if (temp.includes("드라마") || temp.includes("스토리")) {
      drama_list.push(data[i])
    }
    else if (temp.includes("판타지")) {
      fantasy_list.push(data[i])
    }
    else if (temp.includes("액션")) {
      action_list.push(data[i])
    }
    else if (temp.includes("성인")) {
      sexy_list.push(data[i])
    }
  }

  // 카테고리 선택
  var contents = all
  if (category === "all") {
    contents = all
  } else if (category === "romance") {
    contents = romance_list.slice(0, 10)
  } else if (category === "drama") {
    contents = drama_list.slice(0, 10)
  } else if (category === "fantasy") {
    contents = fantasy_list.slice(0, 10)
  } else if (category === "action") {
    contents = action_list.slice(0, 10)
  } else if (category === "sexy") {
    contents = sexy_list.slice(0, 10)
  }

  return (
    <Container>
      {contents.map((content: any, idx: number) => (
        <Row className="ranking-content" key={idx}>
          <Col className="ranking-rank"><h5>{idx+1}</h5></Col>
          <Col className="ranking-wi">
            {content["platform_id"] === 1 ? "네이버웹툰" : null }
            {content["platform_id"] === 2 ? "카카오웹툰" : null }
            {content["platform_id"] === 3 ? "투믹스" : null }
            {content["platform_id"] === 4 ? "레진코믹스" : null }
            <img className="ranking-img" src={content["image_link"]} alt="webtoon-img" />
          </Col>
          <Col xs={7} className="ranking-body">
            <div>
              <h5>{content["title"]}</h5>
            </div>      
            <div>    
              <span className="fb">작가</span> {content["artist"]}&nbsp;  
            </div>    
            <div>    
              <span className="fb">장르</span> {content["genre"]}&nbsp;  
            </div>            
          </Col>
        </Row>
        ))}
    </Container>
  )
}

export default RankingContents;