import React from 'react';
import { Button } from "react-bootstrap";
import BoardSelectbox from './BoardSelectbox';

function BoardCreate() {
  return (
    <div>
      <h2>Board</h2>
      <hr />
      <div className="header-create">
      <BoardSelectbox/>
      <input type="text" name="title" placeholder="제목을 입력하세요" className="mx-5 createInput"></input>
      </div>
      <hr />
      <textarea className="createInput createPost"></textarea>
      <div className="btns mt-3">
      <Button className="leftBtn smallBtn">이미지 첨부하기</Button>
      <Button className="smallBtn">작성하기</Button>
      </div>
    </div>
  )
}

export default BoardCreate;