import { Link } from "react-router-dom";
import React, { useState } from 'react';

import { Button, InputGroup, FormControl, Badge, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Board.css';


function Board() {
  var all_board = [
    {
      "id": 1,
      "platform": "네이버웹툰",
      "webtoon": "메롱",
      "title": "ㅋㅋㅋㅋㅋㅋ",
      "created_at": "21.11.08",
      "comment_n": 7
    },
    {
      "id": 2,
      "platform": "카카오웹툰",
      "webtoon": "다이어트",
      "title": "게시글제목",
      "created_at": "21.11.08",
      "comment_n": 5
    },
    {
      "id": 4,
      "platform": "네이버웹툰",
      "webtoon": "대머리",
      "title": "탈모탈모빔",
      "created_at": "21.11.08",
      "comment_n": 7
    },
    {
      "id": 9,
      "platform": "카카오웹툰",
      "webtoon": "카카오다이어트",
      "title": "헤헷",
      "created_at": "21.11.08",
      "comment_n": 5
    }
  ]

  const [ board, setBoard ] = useState(all_board);
  const [ category, setCategory ] = useState("all");

  // 정렬 : API 받고 나서 시간순으로 정렬!!
  const boardSort = () => {
    board.sort(function (a, b) {
      if (a.id > b.id) { return -1 }
      if (a.id < b.id) { return 1 }
      return 0
    })
  }

  boardSort()

  // 플랫폼 선택
  var naver: any = []
  for (let i=0; i<all_board.length; i++) {
    if (all_board[i]["platform"] === "네이버웹툰") {
      naver.push(all_board[i])
    }
  }

  var kakao: any = []
  for (let i=0; i<all_board.length; i++) {
    if (all_board[i]["platform"] === "카카오웹툰") {
      kakao.push(all_board[i])
    }
  }

  const onSelectPlatform = (e: any) => {
    if (e.target.value === "all") {
      setBoard(board => all_board)
    }
    else if (e.target.value === "naver") {
      setBoard(board => naver)
    }
    else if (e.target.value === "kakao") {
      setBoard(board => kakao)
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
      for (let j=0; j<all_board.length; j++) {
        if (all_board[j]["webtoon"].includes(keyword) || all_board[j]["title"].includes(keyword)) {
          temp_board.push(all_board[j])
        }
      }
    } else if (category === "naver") {
      for (let j=0; j<naver.length; j++) {
        if (naver[j]["webtoon"].includes(keyword) || naver[j]["title"].includes(keyword)) {
          temp_board.push(naver[j])
        }
      }
    } else if (category === "kakao") {
      for (let j=0; j<kakao.length; j++) {
        if (kakao[j]["webtoon"].includes(keyword) || kakao[j]["title"].includes(keyword)) {
          temp_board.push(kakao[j])
        }
      }
    }

    setBoard(board => temp_board)
    boardSort()
  }

  // 자세히보기
  const onClickDetail = (id: number) => {
    window.location.href = `/board/${id}`;
  }

  return (
    <div className="content-wrapper">
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
            <td className="board-date">작성일</td>
          </tr>
        </thead>
        <tbody>
          {board.map((item, idx) => (
            <tr key={idx} className="board-group" onClick={() => onClickDetail(item["id"])}>
              <td>{item["platform"]}</td>
              <td>{item["webtoon"]}</td>
              <td className="board-title">
                {item["title"]}
                <Badge pill text="dark">{item["comment_n"]}</Badge> 
              </td>
              <td className="board-date">{item["created_at"]}</td>
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