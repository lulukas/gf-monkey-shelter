import React from 'react'

// Components
import { Banana } from '../atoms/Banana'

// Styles
import styles from '../../../styles/app/Loading.module.css'

export const Loading = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>We are loading your monkeys!!</p>
      <div className={styles.banana}>
        <Banana size={80} />
      </div>
    </div>
  )
}
