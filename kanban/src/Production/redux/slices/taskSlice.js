import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Functions from "../../Functions/Functions";

export const fetchTasks = createAsyncThunk("fetch/tasksStatus", async () => {
  const { data } = await axios.get(
    "https://634ff7efdf22c2af7b5f3a7e.mockapi.io/kanban"
  );
  return data;
});

const initialState = {
  items: [],
  status: "loading", // loading // success // error
  activeTasks: 0,
  finishedTasks: 0,
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    changeStage(state, action) {
      state.items.find((item) => item.id === action.payload.id).stage =
        action.payload.i;
      Functions.saveLocaleStorage(state.items);
    },
    addNewTask(state, action) {
      state.items.push(action.payload);
      Functions.saveLocaleStorage(state.items);
    },
    changeTitle(state, action) {
      state.items.find((item) => item.id === action.payload.id).title =
        action.payload.value;
      Functions.saveLocaleStorage(state.items);
    },
    changeDescription(state, action) {
      state.items.find((item) => item.id === action.payload.id).description =
        action.payload.value;
      Functions.saveLocaleStorage(state.items);
    },
    sumActFinTask(state) {
      state.activeTasks = state.items.filter((item) => item.stage === 0).length;
      state.finishedTasks = state.items.filter(
        (item) => item.stage === 3
      ).length;
    },
    localItems(state) {
      state.items = JSON.parse(localStorage.getItem("items"));
    },
  },
  extraReducers: {
    [fetchTasks.pending]: (state) => {
      state.status = "loading";
      state.items = [];
    },
    [fetchTasks.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [fetchTasks.rejected]: (state) => {
      state.items = [];
      state.status = "error";
    },
  },
});

export const selectTasks = (i) => (state) =>
  state.tasks.items.filter((task) => task.stage === i);
export const selectPrevTasks = (i) => (state) =>
  state.tasks.items.filter((item) => item.stage === i - 1);
export const selectSumTasks = (state) => state.tasks;
export const selectTask = (params) => (state) =>
  state.tasks.items.find((item) => +item.id === +params.id);

export const {
  changeStage,
  addNewTask,
  changeTitle,
  changeDescription,
  sumActFinTask,
  localItems,
} = taskSlice.actions;

export default taskSlice.reducer;
