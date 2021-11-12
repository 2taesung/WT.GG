import WEBTOON_DATA from "../Type/WebtoonType";

const initialState: any = [];

type webtoonDataType = {
  type: any,
  payload: any
}

const WebtoonReducer = (state: Object = initialState, {type, payload}: webtoonDataType ) => {
  switch (type) {
    case WEBTOON_DATA:
      return payload;
    default:
      return state;
  }
}

export default WebtoonReducer;