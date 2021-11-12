import RANKING_CATEGORY from "../Type/RankingType";

const initialState = "all";

type rankingCategoryType = {
  type: any,
  payload: String
}

const RankingReducer = (state: string = initialState, {type, payload}: rankingCategoryType) => {
  switch(type) {
    case RANKING_CATEGORY:
      return payload;
    default:
      return state;
  };
};

export default RankingReducer;
