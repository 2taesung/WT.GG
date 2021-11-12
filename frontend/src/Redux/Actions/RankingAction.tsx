import RANKING_CATEGORY from "../Type/RankingType";

const ChkRankingCategory = (category: String) => {
  return {
    type: RANKING_CATEGORY,
    payload: category
  }
}

export default ChkRankingCategory;