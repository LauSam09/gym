import React from 'react'
import NavBar from './components/navbar/NavBar'
import Workouts from './pages/workouts/Workouts'
import styles from './App.module.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App () {
  return (
    <BrowserRouter>
      <NavBar />
      <section className={styles.content}>
        <Switch>
          <Route path="/new">
            <div>placeholder</div>
          </Route>
          <Route path="/">
            <Workouts />
          </Route>
        </Switch>
      </section>
    </BrowserRouter>
  )
}

export default App
