import React, { useState } from 'react'
import Button from '../../components/common/Button'
import styles from './AddWorkout.module.css'
import Exercise from '../../models/domain/exercise'

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

  return <div className={styles.container}>
    <div>
      <span>New Workout</span>
      <div style={{ float: 'right' }}>
        <Button size="small" text="Finish" />
      </div>
    </div>

    <form onSubmit={handleSubmit}>
      {
        exercises.map((exercise, exerciseIndex) => (
          <div key={exerciseIndex}>
            <div className={styles['form-group']}>
              <label>Exercise {exerciseIndex + 1}</label>
              <input />
            </div>
            <div className={styles.sets}>
              {
                exercise.sets.map((set, setIndex) => (
                  <div key={setIndex}>
                    <label>{setIndex + 1}</label>
                    <input placeholder='-' value={set.weight} type="number" onChange={e => updateSetWeight(exerciseIndex, setIndex, e.target.value)} />kg
                     x
                    <input type="number" min="0" value={set.repetitions} onChange={e => updateSetRepetitions(exerciseIndex, setIndex, +e.target.value)} />
                  </div>
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
