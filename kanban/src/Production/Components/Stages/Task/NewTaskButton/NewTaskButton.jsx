import React from "react";
import styles from "./NewTaskButton.module.scss";
import Functions from "../../../../Functions/Functions";
import { useDispatch, useSelector } from "react-redux";
import { addNewTask } from "../../../../redux/slices/taskSlice";

function NewTaskButton({ isOpenNewTask, setOpenNewTask }) {
  const [titleInput, setTitleInput] = React.useState("");
  const wrapperRef = React.useRef();
  const itemId = useSelector(
    (state) => state.tasks.items[state.tasks.items.length - 1].id
  );
  const dispatch = useDispatch();
  const newTask = {
    id: itemId + 1,
    title: titleInput,
    description: "",
    stage: 0,
  };
  const onChangeTitle = (e) => {
    Functions.changeHeightTextArea(e.target, 16);
    setTitleInput(e.target.value);
  };

  const onClickAddNewTask = (task) => {
    dispatch(addNewTask(task));
    setTitleInput("");
  };

  const onEnterAddNewTask = (e, task) => {
    if (e.which === 13) {
      e.preventDefault();
      if (titleInput !== "") {
        setTitleInput("");
        dispatch(addNewTask(task));
      }
    }
  };

  const onClickCancel = () => {
    setOpenNewTask(false);
    setTitleInput("");
  };

  React.useEffect(() => {
    Functions.hideComponentClick(wrapperRef.current, setOpenNewTask);
  }, []);

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      {(isOpenNewTask && (
        <>
          <textarea
            value={titleInput}
            rows={1}
            onKeyPress={(e) => onEnterAddNewTask(e, newTask)}
            onChange={onChangeTitle}
          />
          <button
            disabled={titleInput.length === 0 ? true : false}
            onClick={() => onClickAddNewTask(newTask)}
            className={styles.add}
          >
            Submit
          </button>
          <button onClick={onClickCancel} className={styles.cancel}>
            Cancel
          </button>
        </>
      )) || <button onClick={() => setOpenNewTask(true)}>+New Task</button>}
    </div>
  );
}

export default NewTaskButton;
