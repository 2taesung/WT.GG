import React from 'react';
import "./TestCard.css";

function TestCard() {
  const img = "/image/dummy.png";

  return (
    <div className="TestCard-Card">
      
      <span className="Question">
        나는 아침에 일어나면 제일 먼저...
      </span>
      
      
      <img src={img} alt="질문" className="main-category-img" />
      <div className="TestCard-Answer">
        
        <button className="Answer">양치를 한다</button>
        
        <br />
        <div className="btn">
          <span>세수를 한다</span>
        </div>
      </div>
    </div>
  )
}

export default TestCard