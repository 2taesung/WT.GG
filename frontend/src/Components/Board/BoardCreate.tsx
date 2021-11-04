import React from 'react';
import { Button } from "react-bootstrap";
import BoardSelectbox from './BoardSelectbox';

function BoardCreate() {
  return (
    <div className="content-wrapper">
      <h2 className="board-header">Board</h2>
      <hr />
      <div className="header-create">
      <BoardSelectbox/>
      <input type="text" name="title" placeholder="제목을 입력하세요" className="mx-5 create-input"></input>
      </div>
      <hr />
      <textarea className="create-input create-post"></textarea>
      <div className="btns mt-3">
      <Button className="left-btn small-btn" variant="secondary">이미지 첨부하기</Button>
      <Button className="small-btn" variant="secondary">작성하기</Button>
      </div>
    </div>
  )
}

export default BoardCreate;