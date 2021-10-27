import MAIN_CATEGORY from '../Type/MainType';

const ChkCategory = (category: string) => {
  return {
    type: MAIN_CATEGORY,
    payload: category
  };
};

export default ChkCategory;