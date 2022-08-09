import React from 'react'
import styles from './spinner.module.css'

export const Spinner = () => {
  return (
    <div className={styles.containerSpinner}>
        <div className={styles.spinner}></div>
        <span>Loading Recipes...</span>
    </div>
  )
}

export default Spinner