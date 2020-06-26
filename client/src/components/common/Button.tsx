import React from 'react'
import styles from './Button.module.css'
import clsx from 'clsx'

type ButtonProps = {
  text: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  size: 'small' | 'medium' | 'large';
}

export default function Button (props: ButtonProps) {
  return <button
    className={clsx(styles.button, styles[props.size])}
    onClick={props.onClick}>
    {props.text}
  </button>
}
