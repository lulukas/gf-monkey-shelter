import React from 'react'
import PropTypes from 'prop-types'

// Components
import { SectionItemMonkey } from './SectionItemMonkey'

// Styles
import styles from '../../../styles/ReportSectionSpecies.module.css'

export const SectionSpecies = ({ specie, monkeys }) => {
  return (
    <div className={styles.container}>
      <div className={styles['container-header']}>
        <p className={styles.title}>{specie}</p>
        <p className={styles.total}>{monkeys.length}</p>
      </div>
      <div className={styles['container-monkeys']}>
        {monkeys.map((monkey) => (
          <SectionItemMonkey monkey={monkey} isNew/>
        ))}
      </div>
    </div>
  )
}

SectionSpecies.propTypes = {
  specie: PropTypes.string,
  monkeys: PropTypes.array,
}
