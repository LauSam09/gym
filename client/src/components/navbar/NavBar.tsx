import React from 'react'
import styles from './NavBar.module.css'

export default function NavBar () {
  return <nav>
    <ul className={styles.links}>
      <li><a className={styles.active} href="/">Workouts</a></li>
      <li><a href="/">Placeholder</a></li>
    </ul>
  </nav>
}
