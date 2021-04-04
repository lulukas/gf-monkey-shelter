import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'

// Components
import { Monkey } from '../../atoms/Monkey'

// Styles
import styles from '../../../../styles/report/SectionItemMonkey.module.css'
import { DetailsMonkey } from './DetailsMonkey'

export const SectionItemMonkey = ({ monkey }) => {
  const [showDetails, setShowDetails] = useState(false)

  const onClose = () => setShowDetails(false)

  return (
    <Fragment>
      <div className={styles.container} onClick={() => setShowDetails(true)}>
        {monkey.isNew && (
          <div className={styles['new-flag']}>
            <p className={styles['new-text']}>New</p>
          </div>
        )}
        <Monkey size={80} eyeColor={monkey.eyeColor} />
        <p className={styles.name}>{monkey.name}</p>
      </div>
      {showDetails && <DetailsMonkey monkey={monkey} show={showDetails} onClose={onClose} />}
    </Fragment>
  )
}

SectionItemMonkey.propTypes = { monkey: PropTypes.object }
