import React from 'react'
import styles from './Header.module.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import { Link } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  console.log(location.pathname)

  return (
    <div className={styles.header}>
      <h1 className={styles.header_name}>Chadash Muldur</h1>
      <nav className={styles.header_navigation}>
        <Link className={styles.navigation_item}  to="/" >
          Home
        </Link>
        <Link className={styles.navigation_item} to="work">
          Work
        </Link>
        <Link className={styles.navigation_item} to="articles">
          Articles
        </Link>
        <Link className={styles.navigation_item} to="about">
          About
        </Link>
      </nav>
    </div>
  );
}
