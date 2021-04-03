import React from 'react'
import PropTypes from 'prop-types'

// Styles
import styles from '../../../styles/ReportSectionSpecies.module.css'

export const SectionSpecies = ({ specie, monkeys }) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{specie}</p>
      <p className={styles.total}>{monkeys.length}</p>
    </div>
  )
}

SectionSpecies.propTypes = {
  specie: PropTypes.string,
  monkeys: PropTypes.array,
}
