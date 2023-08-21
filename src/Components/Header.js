import React from 'react'
import styles from './Header.module.css'
import { Link } from "react-router-dom";

export default function Header() {

  return (
    <div className={styles.header}>
      <nav className={styles.header_navigation}>
        <Link to="/" >
          <h1 className="text-center text-lg">Chadash.me</h1>
        </Link>
      </nav>
    </div>
  );
}
