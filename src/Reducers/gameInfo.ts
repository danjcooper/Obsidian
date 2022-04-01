interface gameInfo {
  userName: string | null;
  score: number;
  lives: number;
}

interface action {
  payload: string;
  type: string;
}

const initState: gameInfo = { userName: null, score: 0, lives: 0 };

const gameInfoReducer = (state: gameInfo = initState, action: action) => {
  switch (action.type) {
    case 'INCREASE_SCORE':
      return { ...state, score: state.score++ };

    case 'UPDATE_USERNAME':
      return { ...state, userName: action.payload };

    case 'REMOVE_LIFE':
      return { ...state, lives: state.lives-- };

    default:
      return state;
  }
};

export default gameInfoReducer;
