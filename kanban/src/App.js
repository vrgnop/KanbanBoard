import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Desk from "./Production/Pages/Desk/Desk";
import "./Production/SCSS/app.scss";
import PopupTask from "./Production/Pages/PopupTask/PopupTask";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Desk />}>
        <Route path={"/task/:id"} element={<PopupTask />} />
      </Route>
    </Routes>
  );
}

export default App;
