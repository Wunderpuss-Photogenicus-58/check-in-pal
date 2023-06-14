import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink className="ToDo" >To Do</NavLink>
      <NavLink className="Home">Home</NavLink>
      <NavLink className="StudyZone">Study Zone</NavLink>
    </nav>

  )
}

export default NavBar;