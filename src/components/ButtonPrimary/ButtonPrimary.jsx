import React from 'react'

import styles from './ButtonPrimary.module.scss'

const ButtonPrimary = ({ title }) => {
  return (
    <button className={styles.button}>{title}</button>
  )
}

export default ButtonPrimary