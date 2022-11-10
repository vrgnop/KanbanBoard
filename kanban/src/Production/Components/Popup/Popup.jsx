import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Popup.module.scss";

//Компонент обертка для создания попапа

function PopupTask(props) {
  const navigate = useNavigate();
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

  const onClickClosePopup = () => navigate("/");

  return (
    <div onClick={onClickClosePopup} ref={popupRef} className={styles.wrapper}>
      <div onClick={(e) => e.stopPropagation()} className={styles.task}>
        {props.children}
        <button onClick={onClickClosePopup} className={styles.close}></button>
      </div>
    </div>
  );
}

export default PopupTask;
