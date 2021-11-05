import React from 'react';
import "./TestCard.css";
import "./Button.scss";

function TestCard() {
  const img = "/image/dummy.png";
  

  return (
    <div className="TestCard-Card">
      <br />
      <span className="Question">
        나는 아침에 일어나면 제일 먼저...
      </span>
      
      <br />
      <img src={img} alt="질문" className="TestCard-img" />
      <div className="TestCard-Answer">
        <br />
        <button className="btn btn-primary answer-shadow" type="submit">양치를 한다</button>

        <br />
        <br />

        <button className="btn btn-primary" type="submit">세수를 한다</button>

        <br />
        <br />
        <button className="bubbly-button">Click me!</button>
      </div>
    </div>
  )
}

export default TestCard