import React, { useState } from "react";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Board.css";

function BoardDetail(props: any) {
  const id: string = props.match.params["id"]
  const [ data, setData ] = useState({
    "platform_name": "",
    "webtoon_title": "",
    "title": "",
    "contents": "",
    "writer": "",
  })
  const [comments, setComments] = useState([])
  const [password, setPassword] = useState("")
  const [passwordChk, setPasswordChk] = useState("")

  const arrow = "/image/arrow.png"; 


  // API 공간 //
  const fetchBoardDetail = async() => {
    const url = `http://localhost:8080/board/content?id=${id}`
    await axios.get(url)
    .then(res => {
      setData(res.data.content)
      setComments(res.data.comments)
    })
    .catch(err => {
      console.log(err.response)
    })
  }

  const fetchChkPassword = async(data: any) => {
    const url = "http://localhost:8080/board/checkpwd"
    await axios.post(url, data)
    .then(res => {
      console.log(res.data.message)
    })
    .catch(err => {
      console.log(err.response)
    })
  }

  const fetchDelete = async(data: any) => {
    console.log(data)
    const url = "http://localhost:8080/board/delete"
    await axios.delete(url, {data: data})
    .then(res => {
      if (res.data.message === "SUCCESS") {
        alert("게시물이 삭제되었습니다.")
        window.location.href = '/board';
      }
    })
    .catch(err => {
      alert("게시물 삭제에 실패하였습니다.")
      console.log(err.response)
    })
  }
  
  const fetchCreateComment = async(data: any) => {
    const url = "http://localhost:8080/board/comment/write"
    await axios.post(url, data)
    .then(res => {
      alert("댓글이 작성되었습니다.")
      setNewComment("");
      setCmtPassword("");
    })
    .catch(err => {
      alert("댓글 작성에 실패하였습니다.")
      console.log(err.response)      
    })
  }

  // API 공간 //


  fetchBoardDetail()

  const onChangePw = (e: any) => {
    setPassword(e.target.value);
  }

  // 비밀번호 검사
  const onChkPassword = () => {
    const dataPassword = {
      "id": parseInt(id),
      "password": password
    }
    if (passwordChk === "delete") {
      fetchDelete(dataPassword)
    } else {
      fetchChkPassword(dataPassword)
    }    
  }

  // 게시물 수정 버튼
  const goUpdate = () => {
    setPasswordChk("update")
    setPassword("")
    document.querySelector(".password-modal-none")?.classList.remove("password-modal-none");
    // 2. 비밀번호 성공 후, 수정 폼
    // window.location.href = `/board/${id}/update`;
  }

  // 게시물 삭제 버튼
  const onDeleteBoard = () => {
    setPasswordChk("delete");
    setPassword("")
    document.querySelector(".password-modal-none")?.classList.remove("password-modal-none");
  }

  // 모달 닫기
  const onClosePasswordModal = () => {
    document.querySelector(".password-modal")?.classList.add("password-modal-none");
  }

  // 댓글 작성
  const [newComment, setNewComment] = useState("");
  const [cmtPassword, setCmtPassword] = useState("");

  const onChangeComment = (e: any) => {
    setNewComment(e.target.value);
  }

  const commentPassword = (e: any) => {
    setCmtPassword(e.target.value);
  }

  const createComment = () => {
    const data = {
      "board_id": id,
      "comment_content": newComment,
      "comment_password": cmtPassword
    }
    if (newComment === "" || cmtPassword === "") {
      alert("댓글과 비밀번호를 작성해주세요.")
    } else {
      fetchCreateComment(data)
    }
  }

  return (
    <div className="content-wrapper">
      <div className="password-modal password-modal-none">
        <div className="pw-modal-bg">
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>비밀번호 확인</Modal.Title>
            </Modal.Header>

            <Modal.Body className="pw-modal-body">
              <input type="password" name="password-confirmation" onChange={onChangePw} />
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" className="pw-modal-btn" onClick={onChkPassword}>확인</Button>
              <Button variant="secondary" className="pw-modal-btn" onClick={onClosePasswordModal}>취소</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      </div>

      <h2 className="board-header">Board</h2>
      <Link to="/board">
        <div className="board-arrow">
          <img src={arrow} alt="arrow" />
          All Community
        </div>
      </Link>
      <hr />
      <div className="detail-title">
        <span className="platform-and-title">
          <div className="pat-top">
            <span className="detail-platform mx-3">{data["platform_name"]}</span>
            <span className="detail-webtoon-title">{data["webtoon_title"]}</span>
          </div>
          <div className="pat-bottom">{data["title"]}</div>
        </span>
        <span className="btns detail-btns">
          <Button className="mx-2 small-btn" variant="secondary" onClick={goUpdate}>수정</Button>       
          <Button className="small-btn" variant="secondary" onClick={onDeleteBoard}>삭제</Button>
        </span>
      </div>
      <div className="detail-content m-3">{data["contents"]}</div>

      <div className="m-3">댓글</div>

      <table className="table detail-comment m-3">
        <tbody>
          {comments.map((item, idx) => (
            <tr className="comment-table" key={idx}>   
              <td className="comment-content">{item["comment"]}</td>
              <td><Button variant="secondary">삭제</Button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="create-comment mx-3">
        <textarea className="mx-3 mt-1 comment-textarea" value={newComment} onChange={onChangeComment} />
        <div className="wrap-btn">
          <input type="password" id="comment-password" value={cmtPassword} onChange={commentPassword} placeholder="비밀번호" />
          <Button className="small-btn" variant="secondary" onClick={createComment}>등록</Button>
        </div>
      </div>
    </div>
  );
}

export default BoardDetail;
