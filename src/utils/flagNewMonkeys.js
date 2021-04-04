import moment from 'moment'

export const flagNewMonkeys = ({ monkeys, since }) =>
  monkeys.map((monkey) => ({
    ...monkey,
    isNew: moment(monkey.registered).isAfter(since),
  }))
