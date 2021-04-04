import React from 'react'
import PropTypes from 'prop-types'

// Styles
import styles from '../../../../styles/report/ReportSettings.module.css'

export const Settings = ({ lastReportDate, setLastReportDate }) => {
  const handleChangeLastReportDate = (e) => setLastReportDate(e.target.value)

  return (
    <div className={styles.container}>
      <div className={styles.setting}>
        <p className={styles.label}>Date of last Report</p>
        <input
          className={styles['date-picker']}
          name="lastReportDate"
          type="date"
          value={lastReportDate}
          onChange={handleChangeLastReportDate}
        />
      </div>
    </div>
  )
}

Settings.propTypes = {
  lastReportDate: PropTypes.string,
  setLastReportDate: PropTypes.func,
}
