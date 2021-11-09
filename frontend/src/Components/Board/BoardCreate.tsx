import React from 'react';
import { Button, Form } from "react-bootstrap";
import { Link } from 'react-router-dom';

function BoardCreate() {
  return (
    <div className="content-wrapper">
      <h2 className="board-header">Board</h2>
      <hr />
      <div className="header-create">
        <span className="selectboxs d-flex">
          <Form.Select name="platforms" className="platform-select" size="sm">
            <option value="">전체 플랫폼</option>
            <option value="naver">네이버웹툰</option>
            <option value="kakao">카카오웹툰</option>
          </Form.Select>
          <input type="text" name="webtoon" placeholder="웹툰 제목" className="mx-5 create-input create-webtoon"></input>
        </span>
        <input type="text" name="title" placeholder="제목을 입력하세요" className="mx-5 create-input create-title"></input>
      </div>
      <hr />
      <textarea className="create-input create-post"></textarea>
      <div className="create-bottom">
        <input type="password" name="password" placeholder="비밀번호" className="create-input create-password" />
        <div className="btns mt-3">
          <Button className="small-btn cu-btn" variant="secondary">작성</Button>
          <Link to="/board">
            <Button className="small-btn cu-btn" variant="secondary">취소</Button>
          </Link>
        </div>
      </div>
      
    </div>
  )
}

export default BoardCreate;