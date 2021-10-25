import RANKING from '../Type/RankingType';

const initialState = '';

const RankingReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case RANKING: {
      return payload;
    }
    default:
      return state;
  }
};

export default RankingReducer;