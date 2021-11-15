import React, { useEffect, useState } from "react";
import axios from 'axios';
// import Slider from "react-slick";
import './slickstyle.css'; 
import './slick-theme.css';
import './Test.css';
import "./TestCard.css";
import "./Button.scss";
// import TestCard from './TestCard';
import testData from './test_data.json';


function Test() {
  useEffect(()=>{
    let n = arr.length
    if (n === 5) {
      console.log(arr)
      const fetchTestArray = async() => {
        const url = "http://localhost:8080/webtoon/test"
        
        await axios.post(url, arr)
        .then(res => {
          if (res.data["message"] === "SUCCESS") {
            alert("테스트 정보가 입력되었습니다.")
            // window.location.replace('/result')
            window.location.replace('/result')
          }
        })
        .catch(err => {
          console.log(err.response.data.message)
          alert("실패했습니다.")
          console.log(arr)
        })
      }
    }
  })
    const data = testData
    let [i, i변경] = useState(0);
    let [arr, arr변경] = useState<any[]>([]);
    function 투표(a:number) {
      if (i===6) {
        i = 6
      } else {

        i변경(i+1);
  
        var newArray = [...arr];
        newArray.push(a)
        arr변경(newArray)
        // console.log(newArray)
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
            
            <button className="bubbly-button" onClick={ ()=>{ 투표(20) }} >{data[i]["answer1"]}</button>
            <br />
            <button className="bubbly-button" onClick={ ()=>{ 투표(40) }}>{data[i]["answer2"]}</button>
            <br />
            <button className="bubbly-button" onClick={ ()=>{ 투표(60) }}>{data[i]["answer3"]}</button>
            <br />
            <button className="bubbly-button" onClick={ ()=>{ 투표(80) }}>{data[i]["answer4"]}</button>
            <br />
            <button className="bubbly-button" onClick={ ()=>{ 투표(100) }}>{data[i]["answer5"]}</button>

          </div>
        </div>
        
      </div>
    );
  }

export default Test;