import { useState, useEffect } from 'react'
import superagent from 'superagent'

export const useMonkeys = () => {
  const [monkeys, setMonkeys] = useState({ loading: true })

  useEffect(() => {
    superagent.get(process.env.NEXT_PUBLIC_MONKEY_API).end((err, response) => {
      if (err) {
        setMonkeys({ err, loading: false })
      } else {
        setMonkeys({ monkeys: response.body, loading: false })
      }
    })
  }, [])

  return monkeys
}
