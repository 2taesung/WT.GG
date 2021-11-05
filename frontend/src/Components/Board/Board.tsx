import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, InputGroup, FormControl, Pagination, Badge } from "react-bootstrap";

import React from 'react';
import './Board.css';
import BoardSelectbox from "./BoardSelectbox";

function Board() {
  return (
    <div className="content-wrapper">
      <h2 className="board-header">Board</h2>
      <hr />
      <div className="header">
        <BoardSelectbox />
        <span>
        <InputGroup className="search-group">
          <FormControl
            placeholder="search"
          />
          <Button variant="secondary">
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
      <td className="board-title"> <Link to="/board/detail"> title </Link> <Badge pill text="dark">9</Badge> </td>
      <td>00:00</td>
    </tr>
    <tr>
    <td>다음</td>
    <td>만화2</td>
    <td className="board-title">title2 <Badge pill text="dark">4</Badge></td>
      <td>10:00</td>
    </tr>
    <tr>
    <td>레진</td>
    <td>만화3</td>
    <td className="board-title">title3 <Badge pill text="dark">2</Badge></td>
      <td>11:11</td>
    </tr>
  </tbody>
</table>
  <div className="btns">
    <Button className="left-btn small-btn" variant="secondary"> <Link to="/board/create"> 글쓰기 </Link></Button>
    <Button className="small-btn" variant="secondary">내 글 보기</Button>
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