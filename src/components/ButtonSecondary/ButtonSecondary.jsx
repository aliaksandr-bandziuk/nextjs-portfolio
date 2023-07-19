import React from 'react'

import styles from './ButtonSecondary.module.scss'

const ButtonSecondary = ({ title }) => {
  return (
    <button className={styles.button}>{title}</button>
  )
}

export default ButtonSecondary