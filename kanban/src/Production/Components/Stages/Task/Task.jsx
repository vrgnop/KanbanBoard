import React from "react";
import styles from "./Task.module.scss";
import { Link } from "react-router-dom";

function Task({ title, id }) {
  return (
    <Link className={styles.button} to={"task/" + id}>
      <button>{title}</button>
    </Link>
  );
}

export default Task;
