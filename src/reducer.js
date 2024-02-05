import { ACTION_TYPE } from "./actions";
const initialState = {
    currentPlayer: true,
    fields: Array(9).fill(''),
    isGameEnded: false,
    isDraw: false
};
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPE.SET_CURRENT_PLAYER:
      return {
          ...state,
          currentPlayer: payload
      }
    case ACTION_TYPE.SET_FIELDS:
      return {
          ...state,
          fields: payload
      }
    case ACTION_TYPE.SET_IS_GAME_ENDED:
      return {
          ...state,
          isGameEnded: payload
      }
    case ACTION_TYPE.SET_IS_DRAW:
      return {
          ...state, 
          isDraw: payload
      }

    default:
      return state;
  }
};
