import styles from './Benefit.module.scss'
import React from 'react'

export const Benefit = ({ benefitNumber, benefitTitle }) => {
  return (
    <div className={styles.benefit}>
      <div className={styles.numberBorder}>
        <div className={styles.benefitNumber}>{benefitNumber}</div>
      </div>
      <div className={styles.benefitTitle}>{benefitTitle}</div>
    </div>
  )
}
