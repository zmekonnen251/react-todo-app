import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const links = [
  {
    id: 1,
    path: '/',
    text: 'Home',
  },
  {
    id: 2,
    path: '/about',
    text: 'About',
  },
];
const Navbar = () => {
  return (
    <nav className={styles.navBar}>
      <ul>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <NavLink to={link.path}>{link.text}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Navbar;
