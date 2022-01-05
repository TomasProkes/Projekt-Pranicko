import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const getClass = ({isActive}) => isActive ? "menu__link menu__link--active" : "menu__link"
  return (
    <nav className="menu">
      <NavLink className={getClass} to="/">Úvod</NavLink>
      <NavLink className={getClass} to="/design">Vytvořit přáníčko</NavLink>
      <NavLink className={getClass} to="/collect">Vyzvednout</NavLink>
    </nav>
  )
};

export default NavBar;