import React from 'react'
import PropTypes from 'prop-types'


// Components
import { Monkey } from '../../atoms/Monkey'

// Styles
import styles from '../../../styles/DetailsMonkey.module.css'
import moment from 'moment'

export const DetailsMonkey = ({ monkey, show, onClose }) => {
  return (
    <div className={styles.container} onClick={onClose}>
      <div className={styles['container-details']}>
        <div className={styles['grid']}>
          <div className={styles.picture}>
            <Monkey size={200} eyeColor={monkey.eyeColor} />
          </div>
          <p className={styles.label}>Name:</p>
          <p className={styles.value}>{monkey.name}</p>
          <p className={styles.label}>Age:</p>
          <p className={styles.value}>{monkey.age}</p>
          <p className={styles.label}>Weight:</p>
          <p className={styles.value}>{monkey.weight}</p>
          <p className={styles.label}>Eye color:</p>
          <p className={styles.value}>{monkey.eyeColor}</p>
          <p className={styles.label}>Fav. Fruite:</p>
          <p className={styles.value}>{monkey.favoriteFruit}</p>
          <p className={styles.label}>Specie:</p>
          <p className={styles.value}>{monkey.species}</p>
          <p className={styles.label}>Registered:</p>
          <p className={styles.value}>{moment(monkey.registered).format('L')}</p>
        </div>
      </div>
    </div>
  )
}

DetailsMonkey.propTypes = {
  monkey: PropTypes.object,
  show: PropTypes.boolean,
  onClose: PropTypes.func,
}
