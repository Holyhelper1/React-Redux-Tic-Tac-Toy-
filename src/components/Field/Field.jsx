import React from "react";
import styles from "./field.module.css";
import { useDispatch, useSelector } from "react-redux";
import { whoIsWinner } from "../Information/Information";
import {
  setFields,
  setCurrentPlayer,
  setIsDraw,
  setIsGameEnded,
} from "../../actions";

export const Field = ({ index }) => {
  const  fields  = useSelector( (state) => state.fields);
  const   currentPlayer  = useSelector( (state) => state.currentPlayer);
  const dispatch = useDispatch();
  const winner = whoIsWinner(fields);

  const handleClickCell = () => {
    let copyArrayFields = [...fields];
    if (winner || copyArrayFields[index]) {
      dispatch(setIsGameEnded(true));
      return;
    }

    copyArrayFields[index] = currentPlayer ? "X" : "0";
    dispatch(setFields(copyArrayFields));
    dispatch(setCurrentPlayer(!currentPlayer));

    const hasEmptyValue = copyArrayFields.some((value) => value === "");

    dispatch(setIsDraw(!hasEmptyValue));
  };

  return (
    <div className={styles.field} onClick={handleClickCell}>
      {fields[Number(index)]}
    </div>
  );
};
