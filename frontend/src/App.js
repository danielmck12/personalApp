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
          {//<Route path='*' element={<PageNotFound />}></Route>}
          }
          <Route path='/' element={<HomeApp />}></Route>
          <Route path='/NewTool' element={<NewTool />}></Route>
          <Route path='/toDoApp' element={<ToDoApp />}></Route>
          <Route path='/subjects' element={<SubjectsApp />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
