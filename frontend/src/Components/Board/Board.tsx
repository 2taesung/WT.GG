import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from "axios";

import { Button, InputGroup, FormControl, Badge, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Board.css';


function Board() {
  window.scrollTo(0, 0);
  
  const [ allBoard, setAllBoard ] = useState<any[]>([])
  const [ board, setBoard ] = useState(allBoard);
  const [ category, setCategory ] = useState("all");
  const [ loading, setLoading ] = useState("load");

  useEffect(() => {
    const fetchBoard = async () => {
      const url = "http://54.166.95.144/api/board/list";
  
      await axios.get(url)
      .then(res => {
        const data = res.data.list
        for (let i=0; i<data.length; i++) {
          data[i]["date"] = String(data[i]["date"].slice(0, 4)) +"."+ String(data[i]["date"].slice(5, 7)) +"."+ String(data[i]["date"].slice(8, 10))
        }
        setAllBoard(data)
        setBoard(data)
        setLoading("endLoad")
      })
      .catch(err => {
        console.log(err.response)
      })
    }

    fetchBoard()
  }, []);


  // 정렬
  const boardSort = () => {
    board.sort(function (a: any, b: any) {
      if (a.id > b.id) { return -1 }
      if (a.id < b.id) { return 1 }
      return 0
    })
  }

  boardSort()

  // 플랫폼 선택
  var naver: any = []
  var kakao: any = []
  var toomics: any = []
  var lezhin: any = []
  for (let i=0; i<allBoard.length; i++) {
    if (allBoard[i]["platform_name"] === "NAVER") {
      naver.push(allBoard[i])
    }
    
    if (allBoard[i]["platform_name"] === "KAKAOPAGE") {
      kakao.push(allBoard[i])
    }
  
    if (allBoard[i]["platform_name"] === "TOOMICS") {
      toomics.push(allBoard[i])
    }
  
    if (allBoard[i]["platform_name"] === "LEZHIN") {
      lezhin.push(allBoard[i])
    }
  }

  const onSelectPlatform = (e: any) => {
    if (e.target.value === "all") {
      setBoard(allBoard)
    }
    else if (e.target.value === "1") {
      setBoard(naver)
    }
    else if (e.target.value === "2") {
      setBoard(kakao)
    }
    else if (e.target.value === "3") {
      setBoard(toomics)
    }
    else if (e.target.value === "4") {
      setBoard(lezhin)
    }
    setCategory(category => e.target.value)
    boardSort()
    setKeyword("")
  }

  // 키워드 검색
  const [ keyword, setKeyword ] = useState("")

  const onChangeKeyword = (e: any) => {
    setKeyword(e.target.value)
  }

  const onEnterSearch = (e: any) => {
    e.preventDefault()
    if (e.keyCode === 13) {
      onSearchKeyword()
    }
  }

  const onSearchKeyword = () => {
    var temp_board: any = []
    if (category === "all") {
      for (let j=0; j<allBoard.length; j++) {
        if (allBoard[j]["webtoon_title"].includes(keyword) || allBoard[j]["title"].includes(keyword) || allBoard[j]["writer"].includes(keyword)) {
          temp_board.push(allBoard[j])
        }
      }
    } else if (category === "1") {
      for (let j=0; j<naver.length; j++) {
        if (naver[j]["webtoon_title"].includes(keyword) || naver[j]["title"].includes(keyword) || naver[j]["writer"].includes(keyword)) {
          temp_board.push(naver[j])
        }
      }
    } else if (category === "2") {
      for (let j=0; j<kakao.length; j++) {
        if (kakao[j]["webtoon_title"].includes(keyword) || kakao[j]["title"].includes(keyword) || kakao[j]["writer"].includes(keyword)) {
          temp_board.push(kakao[j])
        }
      }
    } else if (category === "3") {
      for (let j=0; j<toomics.length; j++) {
        if (toomics[j]["webtoon_title"].includes(keyword) || toomics[j]["title"].includes(keyword) || toomics[j]["writer"].includes(keyword)) {
          temp_board.push(toomics[j])
        }
      }
    } else if (category === "4") {
      for (let j=0; j<lezhin.length; j++) {
        if (lezhin[j]["webtoon_title"].includes(keyword) || lezhin[j]["title"].includes(keyword) || lezhin[j]["writer"].includes(keyword)) {
          temp_board.push(lezhin[j])
        }
      }
    }

    setBoard(temp_board)
    boardSort()
  }

  // 자세히보기
  const onClickDetail = (id: number) => {
    window.location.href = `/board/${id}`;
  }

  const loading_img = "/image/loading.gif";

  return (
    <div className="content-wrapper">
      <div className={loading === "load" ? "loading" : "hide"}>
        <img src={loading_img} alt="loading" />
      </div>
      <h2 className="board-header">Board</h2>
      <hr />
      <div className="header">
        <span className="selectboxs d-flex">
          <Form.Select name="platforms" className="platform-select" size="sm" onChange={onSelectPlatform}>
            <option value="all">전체 플랫폼</option>
            <option value="1">네이버웹툰</option>
            <option value="2">카카오웹툰</option>
            <option value="3">투믹스</option>
            <option value="4">레진코믹스</option>
          </Form.Select>
        </span>
        <span>
        <InputGroup className="search-group" onChange={onChangeKeyword}>
          <FormControl
            placeholder="Search Webtoon"
            onKeyUp={onEnterSearch}
          />
          <Button variant="secondary" onClick={onSearchKeyword}>
            검색
          </Button>
        </InputGroup>
        </span>
      </div>

      <table className="table mt-4">
        <thead>
          <tr className="fb">
            <td>플랫폼</td>
            <td>웹툰 제목</td>
            <td className="board-title">제목</td>
            <td className="board-date">작성자</td>
            <td className="board-date">작성일</td>
          </tr>
        </thead>
        <tbody>
          {board.map((item: any, idx: number) => (
            <tr key={idx} className="board-group" onClick={() => onClickDetail(item["id"])}>
              <td>{item["platform_name"]}</td>
              <td>{item["webtoon_title"]}</td>
              <td className="board-title">
                {item["title"]}&nbsp;
                <Badge pill text="dark">{item["comment"]}</Badge> 
              </td>
              <td className="board-date">{item["writer"]}</td>
              <td className="board-date">{item["date"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="btns">
        <Button className="left-btn small-btn" variant="secondary"> <Link to="/board/create"> 글쓰기 </Link></Button>
      </div>
    </div>
  )
}

export default Board;
