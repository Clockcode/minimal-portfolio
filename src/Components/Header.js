import React from 'react'
import styles from './Header.module.css'
import { Link } from "react-router-dom";

export default function Header() {

  return (
    <div className={styles.header}>
      <Link className={styles.navigation_item} to="/">
        <h1 className={styles.header_name}>Chadash Muldur</h1>
      </Link>
      <nav className={styles.header_navigation}>
        <Link className={styles.navigation_item} to="/">
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
        <Link className={styles.navigation_item} to="accessform">
          AccessForm
        </Link>
      </nav>
    </div>
  );
}
