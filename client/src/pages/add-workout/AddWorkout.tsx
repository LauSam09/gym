import React, { useState, useRef } from 'react'
import Draggable from 'react-draggable'
import Button from '../../components/common/Button'
import Exercise from '../../models/domain/exercise'
import styles from './AddWorkout.module.css'

export default function AddWorkout () {
  const [exercises, setExercises] = useState<Exercise[]>([{ name: '', sets: [{ repetitions: 0 }] }])
  const [dragging, setDragging] = useState(false)
  const nodeRef = useRef(null)

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

  function deleteSet (exerciseIndex: number, setIndex: number, offset: number): false | void {
    if (dragging && (offset === 50 || offset === -50)) {
      const newExercises = [...exercises]
      newExercises[exerciseIndex].sets.splice(setIndex, 1)
      setExercises(newExercises)
      setDragging(false)
      console.log('returning false')
      return false
    }
  }

  return <div className={styles.container}>
    <div style={{ marginBottom: '10px' }}>
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
                    <Draggable
                      nodeRef={nodeRef}
                      axis="x"
                      bounds={{ left: -50, right: 50 }}
                      position={{ x: 0, y: 0 }}
                      onDrag={() => setDragging(true)}
                      onStop={(_, pos) => deleteSet(exerciseIndex, setIndex, pos.x)}
                    >
                      <div ref={nodeRef}>
                        <label>{setIndex + 1}</label>
                        <input placeholder='-' value={set.weight || ''} type="number" onChange={e => updateSetWeight(exerciseIndex, setIndex, e.target.value)} />kg
                      x
                        <input type="number" min="0" value={set.repetitions} onChange={e => updateSetRepetitions(exerciseIndex, setIndex, +e.target.value)} />
                      </div>
                    </Draggable>

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
