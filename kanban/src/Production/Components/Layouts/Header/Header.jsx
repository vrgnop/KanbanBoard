import React from "react";
import avatar from "../../../Images/avatar.svg";
import styles from "./Header.module.scss";
import classNames from "classnames";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import Functions from "../../../Functions/Functions";

export const menuItems = ["Profile", "Log out"];

function Header() {
  const [isShowMenu, setShowMenu] = React.useState(false);
  const buttonRef = React.useRef();

  React.useEffect(() => {
    Functions.hideComponentClick(buttonRef.current, setShowMenu);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={"logo"}>
        <h1>Awesome Kanban Desk</h1>
      </div>
      <div
        ref={buttonRef}
        onClick={() => setShowMenu(!isShowMenu)}
        className={styles.profileButton}
      >
        <button>
          <img src={avatar} />
          <div
            className={classNames(
              styles.arrowButton,
              isShowMenu ? styles.active : ""
            )}
          ></div>
        </button>
        {isShowMenu && <HeaderMenu />}
      </div>
    </div>
  );
}

export default Header;
