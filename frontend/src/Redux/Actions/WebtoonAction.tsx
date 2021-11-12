import WEBTOON_DATA from "../Type/WebtoonType";

const WebtoonList = (data: any) => {
  return {
    type: WEBTOON_DATA,
    payload: data
  };
};

export default WebtoonList;