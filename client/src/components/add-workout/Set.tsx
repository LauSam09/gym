import React from 'react'
import Button from '../common/Button'
import SetModel from '../../models/domain/set'

type SetProps = {
  number: number
  set: SetModel
  updateRepetitions: (value: number) => void
  updateWeight: (value: string) => void
  delete: () => void
}

export default function Set (props: SetProps) {
  return (
    <div key={props.number}>
      <label>{props.number + 1}</label>
      <input placeholder='-' value={props.set.weight} type="number" onChange={e => props.updateWeight(e.target.value)} />kg
     x
      <input type="number" min="0" value={props.set.repetitions} onChange={e => props.updateRepetitions(+e.target.value)} />
      <Button text='X' size='small' onClick={props.delete} />
    </div>
  )
}
