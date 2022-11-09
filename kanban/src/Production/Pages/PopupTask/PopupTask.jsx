import React from "react";
import styles from "./PoupTask.module.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Popup from "../../Components/Popup/Popup";
import {
  changeTitle,
  selectTask,
  changeDescription,
} from "../../redux/slices/taskSlice";
import classNames from "classnames";
import Functions from "../../Functions/Functions";
import taskTitle from "../../assets/img/task-title.svg";
import taskDescription from "../../assets/img/task-description.svg";

function PopupTask() {
  const [isChangeTitle, setChangeTitle] = React.useState(false);
  const [isChangeDescription, setChangeDescription] = React.useState(false);
  const dispatch = useDispatch();
  let params = useParams();
  const task = useSelector(selectTask(params));
  const titleRef = React.useRef();

  const onChangeTitle = (e) => {
    const value = e.target.value;
    dispatch(changeTitle({ ...task, value }));
    Functions.changeHeightTextArea(e.target, 10);
  };

  const onChangeDescription = (e) => {
    const value = e.target.value;
    dispatch(changeDescription({ ...task, value }));
  };

  const onEnterDoneChangeTitle = (e) => {
    if (e.which === 13 || e.keyCode) {
      setChangeTitle(false);
      titleRef.current.blur();
    }
  };

  React.useEffect(() => {
    Functions.hideComponentMouseDown(titleRef.current, setChangeTitle);
    Functions.changeHeightTextArea(titleRef.current, 10);
  }, []);

  return (
    <Popup params={params}>
      <div className={styles.wrapper}>
        <div className={styles.task}>
          <img src={taskTitle} width={35} />
          <textarea
            ref={titleRef}
            rows={1}
            onMouseDown={() => setChangeTitle(true)}
            onKeyPress={(e) => onEnterDoneChangeTitle(e)}
            onChange={(e) => onChangeTitle(e)}
            className={classNames(styles.title, isChangeTitle && styles.active)}
            value={task.title}
          />
        </div>
        <div className={styles.task}>
          <img src={taskDescription} width={30} />
          <h3>Описание</h3>
          {!isChangeDescription && (
            <button onClick={() => setChangeDescription(true)}>Change</button>
          )}
        </div>
        {(!isChangeDescription && (
          <p>
            {task.description.length !== 0
              ? task.description.split(" ").map((item) =>
                  item.includes("http") ? (
                    <>
                      {" "}
                      <a href={item} target={"_blank"}>
                        {item.split("").slice(0, 50).join("") + "..."}
                      </a>
                    </>
                  ) : (
                    " " + item
                  )
                )
              : "This task has no description"}
          </p>
        )) || (
          <div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              value={task.description}
              onChange={(e) => onChangeDescription(e)}
            />
            <button onClick={() => setChangeDescription(false)}>Save</button>
          </div>
        )}
      </div>
    </Popup>
  );
}

export default PopupTask;
