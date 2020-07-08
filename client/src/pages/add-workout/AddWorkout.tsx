import React, { useState } from 'react'
import Button from '../../components/common/Button'
import styles from './AddWorkout.module.css'
import ExerciseModel from '../../models/domain/exercise'
import Set from '../../components/add-workout/Set'
import Exercise from '../../components/add-workout/Exercise'

export default function AddWorkout () {
  const [exercises, setExercises] = useState<ExerciseModel[]>([{ name: '', sets: [{ repetitions: 0 }] }])

  function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  function addSet (exerciseIndex: number) {
    const newExercises = [...exercises]
    const exercise = newExercises[exerciseIndex]
    exercise.sets = [...exercise.sets, { repetitions: 0 }]
    setExercises(newExercises)
  }

  function updateSetWeight (exerciseIndex: number, setIndex: number, value?: string) {
    const newExercises = [...exercises]
    newExercises[exerciseIndex].sets[setIndex].weight = value === '' || value === undefined ? undefined : +value
    setExercises(newExercises)
  }

  function updateSetRepetitions (exerciseIndex: number, setIndex: number, value: number) {
    const newExercises = [...exercises]
    newExercises[exerciseIndex].sets[setIndex].repetitions = value
    setExercises(newExercises)
  }

  function deleteExercise (exerciseIndex: number) {
    const newExercises = [...exercises]
    newExercises.splice(exerciseIndex, 1)
    setExercises(newExercises)
  }

  function deleteSet (exerciseIndex: number, setIndex: number) {
    const newExercises = [...exercises]
    newExercises[exerciseIndex].sets.splice(setIndex, 1)
    setExercises(newExercises)
  }

  return <div className={styles.container}>
    <div className={styles.header}>
      <span>New Workout</span>
      <div style={{ float: 'right' }}>
        <Button size="small" text="Finish" />
      </div>
    </div>

    <form onSubmit={handleSubmit}>
      {
        exercises.map((exercise, index) => (
          <Exercise
            key={index}
            number={index}
            exercise={exercise}
            delete={() => deleteExercise(index)}
            addSet={() => addSet(index)}
            updateSetRepetitions={(setIndex, value) => updateSetRepetitions(index, setIndex, value)}
            updateSetWeight={(setIndex, value) => updateSetWeight(index, setIndex, value)}
            deleteSet={(setIndex) => deleteSet(index, setIndex)}
          />
        ))
      }
      <div className={styles.add}>
        <Button size='large' text='Add Exercise' onClick={_ => setExercises([...exercises, { name: '', sets: [{ repetitions: 0 }] }])}/>
      </div>
    </form>
  </div>
}
