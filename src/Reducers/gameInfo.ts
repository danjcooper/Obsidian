import { ActionTypes } from '../Enums';
import { gameInfo } from '../Interfaces';

interface action {
  payload: any;
  type: string;
}

const initState: gameInfo = {
  userName: '',
  score: 0,
  lives: 3,
};

const gameInfoReducer = (state: gameInfo = initState, action: action) => {
  switch (action.type) {
    case ActionTypes.INCREASE_SCORE:
      return { ...state, score: state.score + 1 };

    case ActionTypes.UPDATE_USERNAME:
      return { ...state, userName: action.payload };

    case ActionTypes.REMOVE_LIFE:
      return { ...state, lives: state.lives - 1 };

    case ActionTypes.UPDATE_HOUSEMATE_DATA:
      return { ...state, housemateData: action.payload };

    case ActionTypes.UPDATE_SEASON_DATA:
      return { ...state, seasonData: action.payload };

    default:
      return state;
  }
};

export default gameInfoReducer;
