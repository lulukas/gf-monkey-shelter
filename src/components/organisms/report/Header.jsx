import React from 'react'
import PropTypes from 'prop-types'

// Styles
import styles from '../../../../styles/report/ReportHeader.module.css'

export const Header = ({ monkeyCount, speciesCount }) => {
  return (
    <div className={styles.container}>
      <div className={styles['container-amount']}>
        <p className={styles.subtitle}>Monkeys:</p>
        <p className={styles.total}>{monkeyCount}</p>
      </div>
      <div className={styles['container-amount']}>
        <p className={styles.subtitle}>Species:</p>
        <p className={styles.total}>{speciesCount}</p>
      </div>

    </div>
  )
}

Header.propTypes = {
  monkeyCount: PropTypes.number,
  speciesCount: PropTypes.number,
}
