import React from 'react'
import NavBar from './components/navbar/NavBar'
import Workouts from './pages/workouts/Workouts'
import styles from './App.module.css'

function App () {
  return (
    <div>
      <NavBar />
      <section className={styles.content}>
        <Workouts />
      </section>
    </div>
  )
}

export default App
