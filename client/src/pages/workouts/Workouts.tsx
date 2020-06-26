import React from 'react'
import Button from '../../components/common/Button'
import styles from './Workouts.module.css'
import Workout from '../../components/workout-list/Workout'
import { Link } from 'react-router-dom'

const workouts = [
  {
    date: new Date(2019, 6, 15, 17, 30),
    exercises: [
      { name: 'Squat', bestSet: { weight: 75, repetitions: 8 }, sets: [] },
      { name: 'Shoulder Press', bestSet: { weight: 35, repetitions: 7 }, sets: [] }
    ]
  },
  {
    date: new Date(2019, 6, 8, 17, 30),
    exercises: [
      { name: 'Squat', bestSet: { weight: 75, repetitions: 8 }, sets: [] },
      { name: 'A really really really long exercise', bestSet: { weight: 35, repetitions: 7 }, sets: [] }
    ]
  }
]

export default function Workouts () {
  return <div>
    <div className={styles['new-workout']}>
      <Link to="/new">
        <Button size='large' text='NEW' />
      </Link>
    </div>
    <ul className={styles['workout-list']}>
      {
        workouts.map((workout) => <li key={workout.date.toString()}><Workout workout={workout} /></li>)
      }
    </ul>
  </div>
}
