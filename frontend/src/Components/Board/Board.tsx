import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, InputGroup, FormControl, Pagination, Badge } from "react-bootstrap";

import React from 'react';
import './Board.css';
import BoardSelectbox from "./BoardSelectbox";

function Board() {
  return (
    <div>
      <h2>Board</h2>
      <hr />
      <div className="header">
        <BoardSelectbox />
        <span>
        <InputGroup className="searchGroup">
          <FormControl
            placeholder="search"
          />
          <Button>
            검색
          </Button>
        </InputGroup>
        </span>
      </div>

  <table className="table mt-4">
  <thead></thead>
  <tbody>
    <tr>
      <td>네이버</td>
      <td>만화1</td>
      <td className="boardTitle"> <Link to="/board/detail"> title </Link> <Badge pill text="dark">9</Badge> </td>
      <td>00:00</td>
    </tr>
    <tr>
    <td>다음</td>
    <td>만화2</td>
    <td className="boardTitle">title2 <Badge pill text="dark">4</Badge></td>
      <td>10:00</td>
    </tr>
    <tr>
    <td>레진</td>
    <td>만화3</td>
    <td className="boardTitle">title3 <Badge pill text="dark">2</Badge></td>
      <td>11:11</td>
    </tr>
  </tbody>
</table>
  <div className="btns">
    <Button className="leftBtn smallBtn"> <Link to="/board/create"> 글쓰기 </Link></Button>
    <Button className="smallBtn">내 글 보기</Button>
  </div>

  <Pagination>
  <Pagination.First />
  <Pagination.Prev />
  <Pagination.Item>{1}</Pagination.Item>
  <Pagination.Item>{2}</Pagination.Item>
  <Pagination.Item>{3}</Pagination.Item>
  <Pagination.Item>{4}</Pagination.Item>
  <Pagination.Item>{5}</Pagination.Item>
  {/* <Pagination.Ellipsis /> */}
  <Pagination.Next />
  <Pagination.Last />
</Pagination>

    </div>
  )
}

export default Board;