import React from "react";
import styles from "./Stages.module.scss";
import Task from "./Task/Task";
import { useDispatch, useSelector } from "react-redux";
import AddTask from "./Task/AddTask/AddTask";
import { localItems, selectTasks } from "../../redux/slices/taskSlice";
import classNames from "classnames";

function Stages({ stage, i }) {
  const tasks = useSelector(selectTasks(i));
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (localStorage.getItem("localRemember")) {
      dispatch(localItems());
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.stage}>{stage}</div>
      <div id={"stage" + i} className={classNames(styles.tasks, styles.scroll)}>
        {tasks.map((task, i) => (
          <Task key={i} {...task} />
        ))}
      </div>
      <AddTask i={i} />
    </div>
  );
}

export default Stages;
