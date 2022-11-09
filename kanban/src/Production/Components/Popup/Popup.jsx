import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Popup.module.scss";

//Компонент обертка для создания попапа

function PopupTask(props) {
  const popupRef = React.useRef();
  //Блокировка скролла при открытии попапа на мобилке
  React.useEffect(() => {
    const mobileWidth = 600;
    if (window.screen.width <= mobileWidth) {
      document.body.style.overflowY = "hidden";
      return () => {
        document.body.style.overflowY = "auto";
      };
    }
  }, []);

  return (
    <div ref={popupRef} className={styles.wrapper}>
      <Link to={"/"}>
        <div className={styles.background}></div>
      </Link>
      <div className={styles.task}>
        {props.children}
        <Link to={"/"}>
          <button className={styles.close}></button>
        </Link>
      </div>
    </div>
  );
}

export default PopupTask;
