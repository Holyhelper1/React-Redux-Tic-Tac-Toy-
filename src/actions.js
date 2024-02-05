export const ACTION_TYPE = {
  SET_FIELDS: "SET_FIELDS",
  SET_CURRENT_PLAYER: "SET_CURRENT_PLAYER",
  SET_IS_GAME_ENDED: "SET_IS_GAME_ENDED",
  SET_IS_DRAW: "SET_IS_DRAW",
};

export const setFields = (fields) => {
  return {
    type: ACTION_TYPE.SET_FIELDS,
    payload: fields,
  };
};

export const setCurrentPlayer = (currentPlayer) => {
  return {
    type: ACTION_TYPE.SET_CURRENT_PLAYER,
    payload: currentPlayer,
  };
};

export const setIsGameEnded = (isGameEnded) => {
  return {
    type: ACTION_TYPE.SET_IS_GAME_ENDED,
    payload: isGameEnded,
  };
};

export const setIsDraw = (isDraw) => {
  return {
    type: ACTION_TYPE.SET_IS_DRAW,
    payload: isDraw,
  };
};
