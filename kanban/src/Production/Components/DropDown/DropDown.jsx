import React from "react";
import classNames from "classnames";
import styles from "./DropDown.module.scss";
import Functions from "../../Functions/Functions";

//Компонент для создания выпадающего списка

function DropDown({ items, keys, onClick, addItem }) {
  const [isShowTask, setShowTask] = React.useState(false);
  const dropdownRef = React.useRef();

  React.useEffect(() => {
    Functions.hideComponentClick(dropdownRef.current, setShowTask);
  }, []);

  const onClickDropDown = (obj) => {
    onClick(obj);
    setShowTask(false);
  };

  return (
    <div ref={dropdownRef} className={styles.wrapper}>
      {(isShowTask && (
        <>
          <button
            className={classNames(styles.button, styles.close)}
            onClick={() => setShowTask(!isShowTask)}
          >
            <div></div>
          </button>
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <button onClick={() => onClickDropDown(item)}>
                  {item[keys]}
                </button>
              </li>
            ))}
          </ul>
        </>
      )) || (
        <button
          className={classNames(styles.button, styles.open)}
          onClick={() => setShowTask(!isShowTask)}
          disabled={items.length === 0 ? true : false}
        >
          {addItem}
        </button>
      )}
    </div>
  );
}

export default DropDown;
