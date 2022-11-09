import React from "react";
import styles from "./Answer.module.scss";

//Компонент обертка для ответов при возникновении проблем/ошибок/прочего

function Answer({ children }) {
  return (
    <div className={styles.wrapper}>
      <div>{children}</div>
    </div>
  );
}

export default Answer;
