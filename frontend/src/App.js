import ToDoApp from "./ToDoApp/ToDoApp.js";
import SubjectsApp from './SubjectsApp/SubjectsApp.js';
import HomeApp from "./HomeApp/HomeApp.js";
import Navbar from "./Navbar/Navbar.js";
import PageNotFound from "./PageNotFound/PageNotFound.js";
import NewTool from './HomeApp/components/ToolsSection/NewTool/NewTool.js';

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='*' element={<PageNotFound title="Page Not Found!" />}></Route>
          <Route path='/' element={<HomeApp title="Home Page" />}></Route>
          <Route path='/NewTool' element={<NewTool title="Add a New Tool" />}></Route>
          <Route path='/toDoApp' element={<ToDoApp title="ToDo app" />}></Route>
          <Route path='/subjects' element={<SubjectsApp title="Subjects" />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
