import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeStage,
  selectPrevTasks,
} from "../../../../redux/slices/taskSlice";
import NewTaskButton from "../NewTaskButton/NewTaskButton";
import DropDown from "../../../DropDown/DropDown";

function AddTask({ i }) {
  const [isOpenNewTask, setOpenNewTask] = React.useState(false);
  const tasks = useSelector(selectPrevTasks(i));
  const dispatch = useDispatch();

  const onClickChangeStage = (obj) => {
    dispatch(changeStage({ ...obj, i }));
  };

  if (i !== 0) {
    return (
      <DropDown
        items={tasks}
        keys={"title"}
        onClick={onClickChangeStage}
        addItem={"+Add task"}
      />
    );
  }
  return (
    <NewTaskButton
      isOpenNewTask={isOpenNewTask}
      setOpenNewTask={setOpenNewTask}
    />
  );
}

export default AddTask;
