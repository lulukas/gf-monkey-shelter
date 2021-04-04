import React, { Fragment, useState } from 'react'
import moment from 'moment'

// Utils
import { flagNewMonkeys } from '../../utils/flagNewMonkeys'
import { getMonkeysBySpecies } from '../../utils/getMonkeysBySpecies'

// Hooks
import { useMonkeys } from '../../hooks/useMonkeys'

// Components
import { Loading } from './Loading'
import { Header } from '../organisms/report/Header'
import { SectionSpecies } from '../organisms/report/SectionSpecies'
import { Settings } from '../organisms/report/Settings'

// Styles
import styles from '../../../styles/report/Report.module.css'

export const Report = () => {
  const [lastReportDate, setLastReportDate] = useState(
    moment().subtract(7, 'd').format('YYYY-MM-DD')
  )

  const { monkeys, loading, err } = useMonkeys()

  const flaggedMonkeys = monkeys && flagNewMonkeys({ monkeys, since: lastReportDate })

  const monkeysBySpecies =
    flaggedMonkeys &&
    getMonkeysBySpecies(flaggedMonkeys)

  return (
    <div className={styles.container}>
      {(loading && <Loading />) ||
        (err && (
          <Fragment>
            <h1>Err</h1>
            <p>{err}</p>
          </Fragment>
        )) || (
          <Fragment>
            <Settings lastReportDate={lastReportDate} setLastReportDate={setLastReportDate} />
            <Header monkeyCount={monkeys.length} speciesCount={monkeysBySpecies.length} />
            <div>
              {monkeysBySpecies.map(({ specie, monkeys }, index) => (
                <SectionSpecies specie={specie} monkeys={monkeys} key={`specie-${index}`} />
              ))}
            </div>
          </Fragment>
        )}
    </div>
  )
}
