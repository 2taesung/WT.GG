// 그냥 임시로 작성한 것임
// 찐 Action ㄴㄴ
// 사용전에 다 지우기

import RANKING from '../Type/RankingType';

const Ranking = (text) => {
  return {
    rankType: RANKING,
    payload: text
  };
};

export default Ranking;