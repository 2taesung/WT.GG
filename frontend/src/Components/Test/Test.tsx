import React, { useState } from "react";
import axios from 'axios';
import './slickstyle.css'; 
import './slick-theme.css';
import './Test.css';
import "./TestCard.css";
import "./Button.scss";
import testData from './test_data.json';


function Test() {

    const data = testData
    let [i, i변경] = useState(0);
    let [arr, arr변경] = useState<any[]>([]);
    function 투표(i:number, a:number) {
      if (i===6) {
        console.log(arr)
      
        const url = "http://localhost:8080/webtoon/test"
        
        axios.post(url, arr)
        .then(res => {
          console.log(res)
          if (res.data["message"] === "SUCCESS") {
            alert("테스트 정보가 입력되었습니다.")
            let webtoon_id = res.data["result_webtoon_id"]
            console.log(webtoon_id)
            window.location.replace('/result')
            window.location.replace(`/result/${webtoon_id}`)
          }
        })
        .catch(err => {
          console.log(err.response.data.message)
          alert("실패했습니다.")
          console.log(arr)
        })
      } else {

        i변경(i+1);
  
        var newArray = [...arr];
        newArray.push(a)
        arr변경(newArray)
        console.log(newArray)
      }
    }

    return (
      <div className="Test-bg">
        
        <div className="TestCard-Card">
          <br />
          <span className="Question">
            {data[i]["question"]}
          </span>
          
          <br />
          <div className="TestCard-Answer">
            <br />
            
            <button className="bubbly-button" onClick={ ()=>{ 투표(i, 20) }} >{data[i]["answer1"]}</button>
            <br />
            <button className="bubbly-button" onClick={ ()=>{ 투표(i, 40) }}>{data[i]["answer2"]}</button>
            <br />
            <button className="bubbly-button" onClick={ ()=>{ 투표(i, 60) }}>{data[i]["answer3"]}</button>
            <br />
            <button className="bubbly-button" onClick={ ()=>{ 투표(i, 80) }}>{data[i]["answer4"]}</button>
            <br />
            <button className="bubbly-button" onClick={ ()=>{ 투표(i, 100) }}>{data[i]["answer5"]}</button>

          </div>
        </div>
        
      </div>
    );
  }

export default Test;