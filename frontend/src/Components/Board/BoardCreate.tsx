import axios from 'axios';
import React from 'react';
import { Button, Form } from "react-bootstrap";
import { Link } from 'react-router-dom';

class BoardCreate extends React.Component {
  state = {
    platform_id: 1,
    webtoon_id: 0,
    title: "", 
    contents: "",
    webtoon_title: "",
    writer: "", 
    password: ""
  }
  
  // data 변경
  onSelectPlatform = (e: any) => {
    if (e.target.value === "naver") {
      this.setState({"platform_id": 1})
    } else {
      this.setState({"platform_id": 2})
    }
  }

  onChangeWebtoon = (e: any) => {
    this.setState({"webtoon_title": e.target.value})
  }

  onChangeTitle = (e: any) => {
    this.setState({"title": e.target.value})
  }

  onChangeContent = (e: any) => {
    this.setState({"contents": e.target.value})
  }

  onChangeNickname = (e: any) => {
    this.setState({"writer": e.target.value})
  }

  onChangePassword = (e: any) => {
    this.setState({"password": e.target.value})
  }

  // 게시물 작성 api 연동
  fetchCreateBoard = async() => {
    const url = "http://localhost:8080/board/write"

    await axios.post(url, this.state)
    .then(res => {
      console.log(res)
      alert("글이 작성되었습니다.")
    })
    .catch(err => {
      console.log(err.response)
      alert("글 작성에 실패하였습니다.")
    })
  }

  // 제출 버튼 클릭
  onSubmitBoard = () => {
    this.fetchCreateBoard()
  }

  render() {
    const { platform_id, webtoon_title, title, contents, writer, password  } = this.state;

    return (
      <div className="content-wrapper">
        <h2 className="board-header">Board</h2>
        <hr />
        <div className="header-create">
          <span className="selectboxs d-flex">
            <Form.Select name="platforms" value={platform_id} className="platform-select" size="sm" onChange={this.onSelectPlatform}>
              <option value="naver">네이버웹툰</option>
              <option value="kakao">카카오웹툰</option>
            </Form.Select>
            <input type="text" name="webtoon" value={webtoon_title} placeholder="웹툰 제목" className="form-input mx-5 create-input create-webtoon" onChange={this.onChangeWebtoon} />
          </span>
          <input type="text" name="title" value={title} placeholder="제목을 입력하세요" className="mx-5 create-input create-title" onChange={this.onChangeTitle} />
        </div>
        <hr />
        <textarea className="create-input create-post" value={contents} onChange={this.onChangeContent} />
        <div className="create-bottom">
          <div>
            <input type="text" name="nickname" value={writer} placeholder="닉네임" className="create-input create-nickname" onChange={this.onChangeNickname} />
            <input type="password" name="password" value={password} placeholder="비밀번호" className="create-input create-password" onChange={this.onChangePassword} />
          </div>       
          <div className="btns mt-3">
            <Button className="small-btn cu-btn" variant="secondary" onClick={this.onSubmitBoard}>작성</Button>
            <Link to="/board">
              <Button className="small-btn cu-btn" variant="secondary">취소</Button>
            </Link>
          </div>
        </div>        
      </div>
    )
  }
  
}

export default BoardCreate;