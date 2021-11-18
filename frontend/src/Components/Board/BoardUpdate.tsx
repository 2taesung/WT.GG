import React, { useState } from 'react';
import axios from "axios";
import { Button, Form } from "react-bootstrap";

function BoardUpdate(props: any) {
  const id: string = props.match.params["id"]
  const [ info, setInfo ] = useState({
    "platform_name": "",
    "platform_id": 0,
    "webtoon_title": "",
    "webtoon_id": 0,
    "title": "",
    "contents": "",
    "writer": ""
  })
  const [ title, setTitle ] = useState("")
  const [ content, setContent ] = useState("")
  const [ password, setPassword ] = useState("")

  // API 공간 //
  const fetchBoardDetail = async() => {
    const url = `hhttp://54.166.95.144/api/board/content?id=${id}`
    await axios.get(url)
    .then(res => {
      setInfo({
        "platform_name": res.data.content["platform_name"],
        "platform_id": res.data.content["platform_id"],
        "webtoon_title": res.data.content["webtoon_title"],
        "webtoon_id": res.data.content["webtoon_id"],
        "title": res.data.content["title"],
        "contents": res.data.content["contents"],
        "writer": res.data.content["writer"]
      })
    })
    .catch(err => {
      console.log(err.response)
    })
  };

  const fetchUpdate = async(data: any) => {
    const url = "http://54.166.95.144/api/board/modify"
    await axios.put(url, data)
    .then(res => {
      alert("수정이 완료되었습니다.")
      sessionStorage.removeItem("update");
      window.location.replace(`/board/${id}`)
    })
    .catch(err => {
      console.log(err.response)
      alert("수정에 실패하였습니다.")
    })
  }
  // API 공간 //

  fetchBoardDetail()

  // 데이터 변경
  const onChangeTitle = (e: any) => {
    setTitle(e.target.value)
  };

  const onChangeContent = (e: any) => {
    setContent(e.target.value)
  };

  const onChangePassword = (e: any) => {
    setPassword(e.target.value)
  };

  // 취소 버튼 클릭
  const onCancelUpdate = () => {
    sessionStorage.removeItem("update");
    window.location.replace(`/board/${id}`)
  };

  // 수정 버튼 클릭
  const onClickUpdate = () => {
    const data = {
      "id": parseInt(id),
      "platform_id": info["platform_id"],
      "webtoon_id": info["webtoon_id"],
      "title": title,
      "contents": content,
      "password": password
    }

    if (data["title"] === "") {
      data["title"] = info["title"]
    }
    if (data["contents"] === "") {
      data["contents"] = info["contents"]
    }

    if (data["password"] === "") {
      alert("비밀번호를 입력해주세요.")
    } else {
      fetchUpdate(data);
    }
  }

  return (
    <div className="content-wrapper">
      <h2 className="board-header">Board</h2>
      <hr />
      <div className="header-create">
        <span className="selectboxs d-flex">
          <Form.Select name="platforms" className="platform-select" size="sm" disabled>
            <option value="">{info["platform_name"]}</option>
          </Form.Select>
          <input type="text" name="title" value={info["webtoon_title"] || ""} className="mx-5 create-input create-webtoon update-block" readOnly />
        </span>
        <input type="text" name="title" defaultValue={info["title"]} className="mx-5 create-input create-title" onChange={onChangeTitle} />
      </div>
      <hr />
      <textarea className="create-input create-post" defaultValue={info["contents"]} onChange={onChangeContent} />
      <div>
        <input type="text" name="nickname" value={info["writer"] || ""} className="create-input create-nickname update-block" readOnly />
        <input type="password" name="password" defaultValue={password} placeholder="비밀번호" className="create-input create-password" onChange={onChangePassword} />
      </div>   
      <div className="btns mt-3">
        <Button className="small-btn cu-btn" variant="secondary" onClick={onClickUpdate}>수정</Button>
        <Button className="small-btn cu-btn" variant="secondary" onClick={onCancelUpdate}>취소</Button>
      </div>
    </div>
  )
}

export default BoardUpdate;