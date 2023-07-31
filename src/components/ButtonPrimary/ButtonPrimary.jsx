'use client'
import React from 'react'
import { motion } from 'framer-motion'

import styles from './ButtonPrimary.module.scss'

const ButtonPrimary = ({ title, onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
      className={styles.button}
      onClick={onClick}>
      {title}
    </motion.button>
  )
}

export default ButtonPrimary