import MAIN_CATEGORY from '../Type/MainType';

const initialState = 'Ranking';

type mainCategoryType = {
  type: any,
  payload: string
}

const MainReducer = (state: string = initialState, { type, payload }: mainCategoryType) => {
  switch (type) {
    case MAIN_CATEGORY: 
      return payload;
    default:
      return state;
  }
};

export default MainReducer;