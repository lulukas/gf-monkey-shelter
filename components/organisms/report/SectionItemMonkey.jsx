import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'

// Components
import { Monkey } from '../../atoms/Monkey'

// Styles
import styles from '../../../styles/SectionItemMonkey.module.css'
import { DetailsMonkey } from './DetailsMonkey'

export const SectionItemMonkey = ({ monkey, isNew }) => {
  const [showDetails, setShowDetails] = useState(false)
  console.log(
    '🚀 ~ file: SectionItemMonkey.jsx ~ line 13 ~ SectionItemMonkey ~ showDetails',
    showDetails
  )
  const onClose = () => {
    console.log(`close`)
    setShowDetails(false)
  }
  return (
    <Fragment>
      <div className={styles.container} onClick={() => setShowDetails(true)}>
        {isNew && (
          <div className={styles['new-flag']}>
            <p className={styles['new-text']}>New</p>
          </div>
        )}
        <Monkey size={100} eyeColor={monkey.eyeColor} />
        <p className={styles.name}>{monkey.name}</p>
      </div>
      {showDetails && <DetailsMonkey monkey={monkey} show={showDetails} onClose={onClose} />}
    </Fragment>
  )
}

SectionItemMonkey.propTypes = { monkey: PropTypes.object }
