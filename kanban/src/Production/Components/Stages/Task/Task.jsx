import React from "react";
import styles from "./Task.module.scss";
import { useNavigate } from "react-router-dom";

function Task({ title, id }) {
  const navigate = useNavigate();
  return (
    <button className={styles.button} onClick={() => navigate("task/" + id)}>
      {title}
    </button>
  );
}

export default Task;
