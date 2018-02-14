import gameEven from './games/gameEven';
import gameCalc from './games/gameCalc';
import gameGCD from './games/gameGCD';

export default (gameName) => {
  switch (gameName) {
    case 'brain-even':
      return gameEven();
    case 'brain-calc':
      return gameCalc();
    case 'brain-gcd':
      return gameGCD();
    default:
      return null;
  }
};
