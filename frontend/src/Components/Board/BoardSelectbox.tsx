import { Form } from "react-bootstrap";

function BoardSelectbox() {
  return (
    <span className="selectboxs d-flex">
        <Form.Select name="platforms" className="platform-select" size="sm">
            <option value="">플랫폼</option>
            <option value="naver">네이버</option>
            <option value="kakao">카카오</option>
            <option value="lezhin">레진</option>
        </Form.Select>
        <Form.Select name="webtoon-titles" className="webtoon-select" size="sm">
            <option value="">웹툰</option>
            <option value="1">인기만화1</option>
            <option value="2">인기만화2</option>
            <option value="3">인기만화3</option>
        </Form.Select>
        </span>
  )
}

export default BoardSelectbox;