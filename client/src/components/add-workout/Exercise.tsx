import React from 'react'
import Button from '../common/Button'
import Set from '../add-workout/Set'
import ExerciseModel from '../../models/domain/exercise'

import styles from './Exercise.module.css'

type ExerciseProps = {
  number: number
  exercise: ExerciseModel
  delete: () => void
  addSet: () => void
  updateSetRepetitions: (setIndex: number, value: number) => void
  updateSetWeight: (setIndex: number, value: string) => void
  deleteSet: (setIndex: number) => void
}

export default function Exercise (props: ExerciseProps) {
  return (
    <div key={props.number}>
      <div className={styles['exercise-header']}>
        <label>Exercise {props.number + 1}</label>
        <div className={styles['delete-exercise']}>
          <Button text='X' size='small' onClick={() => props.delete()} />
        </div>
      </div>
      <input style={{ width: '95%' }}/>
      <div className={styles.sets}>
        {
          props.exercise.sets.map((set, setIndex) => (
            <Set
              key={setIndex}
              number={setIndex}
              set={set}
              updateRepetitions={value => props.updateSetRepetitions(setIndex, value)}
              updateWeight={value => props.updateSetWeight(setIndex, value)}
              delete={() => props.deleteSet(setIndex)}
            />
          ))
        }
      </div>
      <div className={styles.add}>
        <Button text='Add Set' size='small' onClick={props.addSet} />
      </div>
    </div>
  )
}
