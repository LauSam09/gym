import React from 'react'
import styles from './Button.module.css'

type ButtonProps = {
    text: string;
}

export default function Button (props: ButtonProps) {
  return <button className={styles.button}>{props.text}</button>
}