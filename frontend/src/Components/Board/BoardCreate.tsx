import axios from 'axios';
import React from 'react';
import { Button, Form, Modal } from "react-bootstrap";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import store from '../../Redux/store';

class BoardCreate extends React.Component {
  state = {
    platform_id: 1,
    platform_name: "네이버웹툰",
    webtoon_id: 0,
    title: "", 
    contents: "",
    webtoon_title: "",
    writer: "", 
    password: "",
    webtoon_data: [],
    webtoon_platform: [{"title": ""}],
    webtoons: [],
    modal_platform: "",
    modal_webtoon: "",
  }

  componentDidMount() {
    store.subscribe(() => {
      const data = store.getState().WebtoonReducer
      this.setState({
        "webtoon_data": data,
      })
      var temp_platform: any = []
      for (let i=0; i<this.state.webtoon_data.length; i++) {
        if (this.state.webtoon_data[i]["platform_id"] === 1) {
          temp_platform.push(this.state.webtoon_data[i])
        }
      } 
      this.setState({"webtoon_platform": temp_platform, "webtoons": temp_platform})
    })
  }

  // data 변경
  // 플랫폼 선택
  onSelectPlatform = (e: any) => {
    var temp_platform: any = []
    for (let i=0; i<this.state.webtoon_data.length; i++) {
      if (this.state.webtoon_data[i]["platform_id"] === parseInt(e.target.value)) {
        temp_platform.push(this.state.webtoon_data[i])
      }
    } 
    this.setState({"webtoon_platform": temp_platform, "webtoons": temp_platform, "modal_platform": e.target.value})
  }

  // 웹툰 검색
  onChangeWebtoon = (e: any) => {
    var temp_webtoon: any = []
    for (let i=0; i<this.state.webtoon_platform.length; i++) {
      if (this.state.webtoon_platform[i]["title"].includes(e.target.value)) {
        temp_webtoon.push(this.state.webtoon_platform[i])
      }
    }
    this.setState({"modal_webtoon": e.target.value, "webtoons": temp_webtoon})
  }
  
  // 웹툰 선택
  onPickWebtoon = (e: any) => {
    this.setState({"webtoon_title": e["title"], "webtoon_id": e["id"], "platform_id": this.state.modal_platform})
    if (this.state.modal_platform === "1") {
      this.setState({"platform_name": "네이버웹툰", "platform_id": 1})
    } else if (this.state.modal_platform === "2") {
      this.setState({"platform_name": "카카오웹툰", "platform_id": 2})
    } else if (this.state.modal_platform === "3") {
      this.setState({"platform_name": "투믹스", "platform_id": 3})
    } else if (this.state.modal_platform === "4") {
      this.setState({"platform_name": "레진코믹스", "platform_id": 4})
    }
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
  fetchCreateBoard = async(data: any) => {
    const url = "http://localhost:8080/board/write"

    await axios.post(url, data)
    .then(res => {
      if (res.data["message"] === "SUCCESS") {
        alert("글이 작성되었습니다.")
        window.location.replace('/board')
      }
    })
    .catch(err => {
      console.log(err.response.data.message)
      alert("글 작성에 실패하였습니다.")
      console.log(this.state)
    })
  }

  // 검색 모달 열기
  onOpenModal = () => {
    document.querySelector(".create-modal-none")?.classList.remove("create-modal-none");
  }

  // 모달 닫기
  onClosedModal = () => {
    document.querySelector(".create-modal")?.classList.add("create-modal-none");
  }

  // 제출 버튼 클릭
  onSubmitBoard = () => {
    const data = {
      "platform_id": this.state.platform_id,
      "webtoon_id": this.state.webtoon_id,
      "webtoon_title": this.state.webtoon_title,
      "writer": this.state.writer,
      "title": this.state.title,
      "contents": this.state.contents,
      "password": this.state.password,
    }

    if (data["platform_id"] === 0 || data["webtoon_id"] === 0 || data["webtoon_title"] === "") {
      alert("웹툰을 선택해주세요.")
    }
    else if (data["title"] === "" || data["contents"] === "") {
      alert("제목, 내용을 입력해주세요.")
    }
    else if (data["writer"] === "" || data["password"] === "") {
      alert("작성자 정보를 입력해주세요.")
    }
    else {
      this.fetchCreateBoard(data)
    }    
  }

  render() {
    const { platform_name, webtoon_title, title, contents, writer, password, webtoons, modal_webtoon } = this.state;
    const search_icon = "/image/search.png"

    return (
      <div className="content-wrapper">
        <div className="create-modal create-modal-none">
          <div className="c-modal-bg">
            <Modal.Dialog>
              <Modal.Header>
                <Modal.Title>웹툰 검색</Modal.Title>
              </Modal.Header>

              <Modal.Body className="c-modal-body">
                <Form.Select name="platforms" className="platform-select" size="sm" onChange={this.onSelectPlatform}>
                  <option value="1">네이버웹툰</option>
                  <option value="2">카카오웹툰</option>
                  <option value="3">투믹스</option>
                  <option value="4">레진코믹스</option>
                </Form.Select>
                <input type="text" name="create-webtoon-title" value={modal_webtoon} onChange={this.onChangeWebtoon} />
                <div className="c-modal-wetoons">
                  {webtoons.map((item, idx) => (
                    <div key={idx} className="bc-modal-title" onClick={() => this.onPickWebtoon(item)}>{item["title"]}</div>
                  ))}
                </div>            
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" className="pw-modal-btn" onClick={this.onClosedModal}>닫기</Button>
              </Modal.Footer>
            </Modal.Dialog>
          </div>
        </div>
        
        <h2 className="board-header">Board</h2>
        <hr />
        <div className="header-create">
          <span className="selectboxs d-flex">
          <Form.Select name="platforms" className="platform-select" size="sm" disabled>
            <option value="1">{platform_name}</option>
          </Form.Select>
            <input type="text" name="webtoon" value={webtoon_title} placeholder="검색해주세요" className="form-input create-input create-webtoon" readOnly/>
            <Button className="create-search" variant="white" onClick={this.onOpenModal}>
              <img src={search_icon} alt="검색" />
            </Button>
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

function mapStateToProps(state: any) {
  return { data: state.WebtoonReducer }
};

export default connect(mapStateToProps)(BoardCreate);