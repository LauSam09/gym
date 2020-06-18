import React from 'react'
import Model from '../../models/domain/workout'
import styles from './Workout.module.css'

type WorkoutProps = {
    workout: Model;
}

export default function Workout (props: WorkoutProps) {
  return <div className={styles.container}>
    {props.workout.date.toDateString()}
    {props.workout.exercises?.map((exercise, index) => <div key={index}>
      {exercise.name}
    </div>)}
  </div>
}
