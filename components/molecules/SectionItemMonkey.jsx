import React from 'react'
import PropTypes from 'prop-types'

// Components
import { Monkey } from '../atoms/Monkey'

// Styles
import styles from '../../styles/SectionItemMonkey.module.css'

export const SectionItemMonkey = ({ monkey }) => {
  return (
    <div className={styles.container}>
      <Monkey size={100} eyeColor={monkey.eyeColor} />
      <p className={styles.name}>{monkey.name}</p>
    </div>
  )
}

SectionItemMonkey.propTypes = { monkey: PropTypes.object }
