import * as types from '../actions/types';

const initialState = {
    currentPlayer: 'red',
    playingBoard: [
        [],  //col 0
        [],  //col 1
        [],  //col 2
        [],  //col 3
        [],  //col 4
        [],   //col 5
        []   //col 6
    ]
  };

  const gameReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
      case types.COL_DATA:
        console.log(`The value from reducer ${action.payload }`);
        const newCol = [...state.playingBoard[action.payload], state.currentPlayer];
        const newBoard = [...state.playingBoard];
        newBoard[action.payload] = newCol;
        newState = {...state, currentPlayer: state.currentPlayer === 'red' ? 'yellow' : 'red', playingBoard: newBoard};
        console.log(`The newState from reducer ${JSON.stringify(newState)}`);
        break;
      default:
        newState = state;
    }
    return newState;
  };
  
  export default gameReducer;
