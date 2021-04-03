import React from 'react'
import PropTypes from 'prop-types'

// Styles
import styles from '../../../styles/ReportHeader.module.css'

export const Header = ({ monkeys }) => {
  return (
    <div className={styles.container}>
      {/* <h1 className={styles.title}>Report</h1> */}
      <p className={styles.subtitle}>Total amount of Monkeys in the shelter:</p>
      <p className={styles.total}>{monkeys.length}</p>
    </div>
  )
}

Header.propTypes = { monkeys: PropTypes.array }
