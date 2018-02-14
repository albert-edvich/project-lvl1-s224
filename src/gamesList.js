import gameEven from './games/gameEven';
import gameCalc from './games/gameCalc';

export default (gameName) => {
  switch (gameName) {
    case 'brain-even':
      return gameEven();
    case 'brain-calc':
      return gameCalc();
    default:
      return null;
  }
};
