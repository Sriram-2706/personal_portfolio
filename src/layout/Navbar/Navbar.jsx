import React from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../../utils/constants';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <NavLink to="/" className="navbar-logo">
          Portfolio
        </NavLink>
        <ul className="navbar-links">
          {NAV_LINKS.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive ? 'navbar-link active' : 'navbar-link'
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
