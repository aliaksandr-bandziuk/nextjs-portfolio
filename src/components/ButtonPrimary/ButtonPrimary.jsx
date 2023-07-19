import React from 'react'

import styles from './ButtonPrimary.module.scss'

const ButtonPrimary = ({ title, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {title}
    </button>
  )
}

export default ButtonPrimary