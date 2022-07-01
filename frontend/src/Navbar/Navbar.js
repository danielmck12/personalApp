import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {

   return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
         <div className="container-fluid justify-content-center">
            <div className="navbar-nav nav ">
               <NavLink className={({ isActive }) => isActive ? "red" : "blue"} to="/">
                  <button className="nav-link btn" >Home</button>
               </NavLink>
               <Link className="nav-item" to="/toDoApp">
                  <button className="nav-link btn" >To Do App</button>
               </Link>
               <Link className="nav-item" to="/subjects">
                  <button className="nav-link btn" >Subjects</button>
               </Link>
            </div>
         </div>
      </nav>
   )
}

export default Navbar;