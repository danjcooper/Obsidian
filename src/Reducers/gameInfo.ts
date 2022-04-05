import { gameInfo } from '../Interfaces';

interface action {
  payload: any;
  type: string;
}

const initState: gameInfo = {
  userName: null,
  score: 0,
  lives: 3,
};

const gameInfoReducer = (state: gameInfo = initState, action: action) => {
  switch (action.type) {
    case 'INCREASE_SCORE':
      return { ...state, score: state.score + 1 };

    case 'UPDATE_USERNAME':
      return { ...state, userName: action.payload };

    case 'REMOVE_LIFE':
      return { ...state, lives: state.lives - 1 };

    case 'UPDATE_HOUSEMATE_DATA':
      return { ...state, housemateData: action.payload };

    case 'UPDATE_SEASON_DATA':
      return { ...state, seasonData: action.payload };

    default:
      return state;
  }
};

export default gameInfoReducer;
