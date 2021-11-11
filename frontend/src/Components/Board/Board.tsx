import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from "axios";

import { Button, InputGroup, FormControl, Badge, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Board.css';


function Board() {
  const [ allBoard, setAllBoard ] = useState<any[]>([])
  const [ board, setBoard ] = useState(allBoard);
  const [ category, setCategory ] = useState("all");
  const [ loading, setLoading ] = useState("load");

  useEffect(() => {
    const fetchBoard = async () => {
      const url = "http://localhost:8080/board/list";
  
      await axios.get(url)
      .then(res => {
        setAllBoard(res.data.list)
        setBoard(res.data.list)
        setLoading("endLoad")
      })
      .catch(err => {
        console.log(err)
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
  for (let i=0; i<allBoard.length; i++) {
    if (allBoard[i]["platform_name"] === "NAVER") {
      naver.push(allBoard[i])
    }
  }

  var kakao: any = []
  for (let i=0; i<allBoard.length; i++) {
    if (allBoard[i]["platform_name"] === "KAKAO") {
      kakao.push(allBoard[i])
    }
  }

  const onSelectPlatform = (e: any) => {
    if (e.target.value === "all") {
      setBoard(allBoard)
    }
    else if (e.target.value === "naver") {
      setBoard(naver)
    }
    else if (e.target.value === "kakao") {
      setBoard(kakao)
    }
    setCategory(category => e.target.value)
    boardSort()
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
        if (allBoard[j]["webtoon_title"].includes(keyword) || allBoard[j]["title"].includes(keyword)) {
          temp_board.push(allBoard[j])
        }
      }
    } else if (category === "naver") {
      for (let j=0; j<naver.length; j++) {
        if (naver[j]["webtoon_title"].includes(keyword) || naver[j]["title"].includes(keyword)) {
          temp_board.push(naver[j])
        }
      }
    } else if (category === "kakao") {
      for (let j=0; j<kakao.length; j++) {
        if (kakao[j]["webtoon_title"].includes(keyword) || kakao[j]["title"].includes(keyword)) {
          temp_board.push(kakao[j])
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
        <img src={loading_img} alt="laoding" />
      </div>
      <h2 className="board-header">Board</h2>
      <hr />
      <div className="header">
        <span className="selectboxs d-flex">
          <Form.Select name="platforms" className="platform-select" size="sm" onChange={onSelectPlatform}>
            <option value="all">전체 플랫폼</option>
            <option value="naver">네이버웹툰</option>
            <option value="kakao">카카오웹툰</option>
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
              <td className="board-date">{item["regdate"]}</td>
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