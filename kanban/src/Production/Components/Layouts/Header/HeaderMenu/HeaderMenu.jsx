import React from "react";
import { menuItems } from "../Header";
import styles from "./HeaderMenu.module.scss";

function HeaderMenu() {
  return (
    <>
      <div className={styles.arrow}></div>
      <div className={styles.menu}>
        <ul>
          {menuItems.map((item, i) => (
            <li key={i}>
              <button>{item}</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default HeaderMenu;
