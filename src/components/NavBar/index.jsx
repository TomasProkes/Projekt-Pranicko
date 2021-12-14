import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
   return (
    <nav className="menu">
      <Link className="menu__link menu__link--active" to="/">Úvod</Link>
      <Link className="menu__link" to="/design">Vytvořit přáníčko</Link>
      <Link className="menu__link" to="/collect">Vyzvednout</Link>
    </nav>
   )
};

export default NavBar;