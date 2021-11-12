import axios from "axios";
import { useDispatch } from 'react-redux';
import WebtoonList from '../../Redux/Actions/WebtoonAction';

export const WebtoonApi = async() => {
  const dispatch = useDispatch();

  const url = "http://localhost:8080/webtoon/ranking";

  await axios.get(url)
  .then(res => {
    // 성공!
    const data =  res.data.list
    
    dispatch(WebtoonList(data))
  })
  .catch(err => {
    console.log(err.response)
  })
}