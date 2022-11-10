import React from "react";
import Answer from "../../Components/Answer/Answer";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.scss";

function NotFound() {
  return (
    <Answer>
      <div className={styles.wrapper}>
        <h1>This page is not found🙄</h1>
        <button>
          <Link to={"/"}>Main</Link>
        </button>
      </div>
    </Answer>
  );
}

export default NotFound;
