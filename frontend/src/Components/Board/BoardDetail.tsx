import React from "react";
import { Button } from "react-bootstrap";
import "./Board.css";

function BoardDetail() {
  return (
    <div>
      <h2>Board</h2>
      <hr />
      <div className="detailTitle">
        <span className="platformAndTitle">
          <span className="detailPlatform mx-3">플랫폼1</span>
          <span className="detailWebtoonTitle">만화제목2</span>
          <span className="detailTitlte mx-5">title1</span>
        </span>
        <span className="btns">
          <Button className="mx-2 smallBtn">수정</Button>
          <Button className="smallBtn">삭제</Button>
        </span>
      </div>
      <div className="detailContent m-3">게시글 내용</div>

      <div className="m-3">댓글</div>

      <table className="table detailComment m-3">

        <tbody>
          <tr className="commentTable">
            <td className="commentWriter">익명1</td>
            <td className="commentContent">댓글내용</td>
          </tr>
        </tbody>
      </table>
      <div className="createComment mx-3">
        <textarea className="mx-3 mt-1"></textarea>
        <div className="wrapBtn">
        <Button className="smallBtn">등록</Button>
        </div>
      </div>
    </div>
  );
}

export default BoardDetail;
