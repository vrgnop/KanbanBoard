import React from "react";
import styles from "./Footer.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectSumTasks, sumActFinTask } from "../../../redux/slices/taskSlice";

const name = "Nikita";
const year = new Date().getFullYear();

function Footer() {
  const { activeTasks, finishedTasks } = useSelector(selectSumTasks);
  const tasks = useSelector((state) => state.tasks.items);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(sumActFinTask());
  }, [tasks]);

  return (
    <div className={styles.wrapper}>
      <div>
        <span>Active tasks: {activeTasks}</span>
        <span>Finished tasks: {finishedTasks}</span>
      </div>
      <div>
        Kanban Board {name}, {year}
      </div>
    </div>
  );
}

export default Footer;
