import React from 'react';
import { Button, Form } from "react-bootstrap";

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
        </span>
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