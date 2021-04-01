import React from 'react'

// Components
import MonkeyShelterLogo from '../atoms/MonkeyShelterLogo'

// Styles
import styles from '../../styles/Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <MonkeyShelterLogo size="80" />
      </div>
      <h1 className={styles['logo-text']}>GF Monkey Shelter</h1>
    </div>
  )
}

export default Header
