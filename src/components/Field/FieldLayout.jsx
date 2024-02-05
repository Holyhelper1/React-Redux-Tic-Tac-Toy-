import React from "react";
import styles from "./field.module.css";
import { Field } from "./Field";
// import { useReduxState } from "../../redux-manager";
import {  useSelector } from "react-redux";

export const FieldLayout = () => {
  const  fields  = useSelector((state) => state.fields);

  return (
    <div className={styles.fildWrapper}>
      {fields.map((field, index) => (
        <Field key={index} index={index} field={field} />
      ))}
    </div>
  );
};
