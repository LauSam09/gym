import React, { useState } from 'react'
import Button from '../../components/common/Button'
import styles from './AddWorkout.module.css'
import Exercise from '../../models/domain/exercise'
import Set from '../../components/add-workout/Set'

export default function AddWorkout () {
  const [exercises, setExercises] = useState<Exercise[]>([{ name: '', sets: [{ repetitions: 0 }] }])

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
        exercises.map((exercise, exerciseIndex) => (
          <div key={exerciseIndex}>
            <div className={styles['exercise-header']}>
              <label>Exercise {exerciseIndex + 1}</label>
              <div className={styles['delete-exercise']}>
                <Button text='X' size='small' onClick={() => deleteExercise(exerciseIndex)} />
              </div>
            </div>
            <input style={{ width: '95%' }}/>
            <div className={styles.sets}>
              {
                exercise.sets.map((set, setIndex) => (
                  <Set
                    key={setIndex}
                    number={setIndex}
                    set={set}
                    updateRepetitions={value => updateSetRepetitions(exerciseIndex, setIndex, value)}
                    updateWeight={value => updateSetWeight(exerciseIndex, setIndex, value)}
                    delete={() => deleteSet(exerciseIndex, setIndex)}
                  />
                ))
              }
            </div>
            <div className={styles.add}>
              <Button text='Add Set' size='small' onClick={() => addSet(exerciseIndex)} />
            </div>
          </div>
        ))
      }
      <div className={styles.add}>
        <Button size='large' text='Add Exercise' onClick={_ => setExercises([...exercises, { name: '', sets: [{ repetitions: 0 }] }])}/>
      </div>
    </form>
  </div>
}
