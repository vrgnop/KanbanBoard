import React from "react";
import Stages from "../../Components/Stages/Stages";
import styles from "./Desk.module.scss";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../../redux/slices/taskSlice";
import Answer from "../../Components/Answer/Answer";

const stages = ["Backlog", "Ready", "In Progress", "Finished"];

function Desk() {
  const [loading, setLoading] = React.useState("");
  const status = useSelector((state) => state.tasks.status);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  React.useEffect(() => {
    if (status === "loading") {
      const x = setInterval(() => {
        setLoading(loading === "..." ? "" : loading + ".");
        clearInterval(x);
      }, 400);
    }
  });

  if (status === "success") {
    return (
      <div className={styles.wrapper}>
        {stages.map((stage, i) => (
          <Stages stage={stage} i={i} key={i} />
        ))}
        <Outlet />
      </div>
    );
  }
  return (
    <Answer>
      {status === "loading" ? (
        <h1>Loading{loading}</h1>
      ) : (
        <>
          <h1>Failed loading task list🙄</h1>
          <p>Please try to update later</p>
        </>
      )}
    </Answer>
  );
}

export default Desk;
