import React, { Fragment } from 'react'

// Hooks
import { useMonkeys } from '../../hooks/useMonkeys'

// Components
import { Loading } from '../organisms/Loading'

// Styles
import styles from '../../styles/Report.module.css'
import { Header } from '../organisms/report/Header'
import { getMonkeysBySpecies } from '../../utils/getMonkeysBySpecies'
import { SectionSpecies } from '../organisms/report/SectionSpecies'

export const Report = () => {
  const { monkeys, loading, err } = useMonkeys()

  const monkeysBySpecies = monkeys && getMonkeysBySpecies(monkeys)
  console.log('🚀 ~ file: Report.jsx ~ line 18 ~ Report ~ monkeysBySpecies', monkeysBySpecies)

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
            <Header monkeys={monkeys} />
            <div>
              {monkeysBySpecies.map(({ specie, monkeys }) => (
                <SectionSpecies specie={specie} monkeys={monkeys} />
              ))}
            </div>
          </Fragment>
        )}
    </div>
  )
}
