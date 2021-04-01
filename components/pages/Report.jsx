import React, { Fragment } from 'react'

// Hooks
import { useMonkeys } from '../../hooks/useMonkeys'

// Styles
import styles from '../../styles/Report.module.css'

export const Report = () => {
  const { monkeys, loading, err } = useMonkeys()
  console.log("🚀 ~ file: Report.jsx ~ line 6 ~ Report ~ monkeys", monkeys)
  return (
    <div className={styles.container}>
      {(loading && <h1>Loading ...</h1>) ||
        (err && (
          <Fragment>
            <h1>Err</h1>
            <p>{err}</p>
          </Fragment>
        )) || (
          <Fragment>
            <h1>My Monkeys</h1>
            {monkeys.map((monkey) => (
              <p>{JSON.stringify(monkey)}</p>
            ))}
          </Fragment>
        )}
    </div>
  )
}
