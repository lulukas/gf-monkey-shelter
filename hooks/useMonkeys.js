import { useState, useEffect } from 'react'
import superagent from 'superagent'

export const useMonkeys = () => {
  const [monkeys, setMonkeys] = useState({ loading: true })
  
  useEffect(() => {
    console.log(
      '🚀 ~ file: useMonkeys.js ~ line 9 ~ superagent.get ~ process.env.MONKEY_API',
      process.env.NEXT_PUBLIC_MONKEY_API
      )
      superagent.get(process.env.NEXT_PUBLIC_MONKEY_API).end((err, response) => {
        if (err) {
          console.log('🚀 ~ file: useMonkeys.js ~ line 12 ~ superagent.get ~ err', err)
          setMonkeys({ err, loading: false })
        } else {
        console.log("🚀 ~ file: useMonkeys.js ~ line 13 ~ superagent.get ~ response", response)
        setMonkeys({ monkeys: response.body, loading: false })
      }
    })
  }, [])
  
  console.log("🚀 ~ file: useMonkeys.js ~ line 6 ~ useMonkeys ~ monkeys", monkeys)
  return monkeys
}
