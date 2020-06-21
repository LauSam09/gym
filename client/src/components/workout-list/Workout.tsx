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
      <span className={styles['exercise-name']}>{exercise.name}</span>
      <span className={styles['exercise-set']}>{exercise.bestSet?.weight}kg * {exercise.bestSet?.repetitions}</span>
    </div>)}
  </div>
}
