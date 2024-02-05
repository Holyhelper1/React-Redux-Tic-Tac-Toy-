import styles from "./game.module.css";
import React from "react";

import { FieldLayout } from "./components/Field/FieldLayout";
import { InformationLayout } from "./components/Information/InformationLayout";
import { useDispatch } from "react-redux";
import {
  setCurrentPlayer,
  setFields,
  setIsDraw,
  setIsGameEnded,
} from "./actions";

export const Game = () => {
  const dispatch = useDispatch();

  const startNewGame = () => {
    return (
      <button
        className={styles.newGameBtn}
        onClick={() => {
          dispatch(setCurrentPlayer(true));
          dispatch(setFields(Array(9).fill("")));
          dispatch(setIsDraw(false));
          dispatch(setIsGameEnded(false));
        }}>
        New Game
      </button>
    );
  };

  return (
    <div className={styles.app}>
      {startNewGame()}
      <FieldLayout />
      <InformationLayout />
    </div>
  );
};

export default Game;
