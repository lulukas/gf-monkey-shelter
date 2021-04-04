/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import assert from 'assert'
import moment from 'moment'
import { flagNewMonkeys } from './flagNewMonkeys'

const testMonkeys = [
  {
    _Id: '602f8816502802e8cd44f0d4',
    name: 'Bowen',
    age: 28,
    weight: 31,
    eyeColor: 'brown',
    species: 'Rio Purus titi',
    registered: '2016-02-22T04:01:30',
    favoriteFruit: 'banana',
  },
  {
    _Id: '602f88160aa830319f1e1e4b',
    name: 'Raquel',
    age: 30,
    weight: 82,
    eyeColor: 'green',
    species: 'Red-faced spider monkey',
    registered: '2015-01-06T00:43:18',
    favoriteFruit: 'apple',
  },
]

const dateBefor = moment('2015-01-06')
const dateBetween = moment('2016-02-22')
const dateAfter = moment('2016-02-23')

describe('flagNewMonkeys.test.js', () => {
  it('all new monkeys', () => {
    assert.ok(testMonkeys)

    const flaggedMonkeys = flagNewMonkeys({ monkeys: testMonkeys, since: dateBefor })

    const bowen = flaggedMonkeys.find((monkey) => monkey.name === 'Bowen')
    const raquel = flaggedMonkeys.find((monkey) => monkey.name === 'Raquel')

    assert.strictEqual(bowen.isNew, true)
    assert.strictEqual(raquel.isNew, true)

  })
  it('no new monkeys', () => {
    assert.ok(testMonkeys)

    const flaggedMonkeys = flagNewMonkeys({ monkeys: testMonkeys, since: dateAfter })

    const bowen = flaggedMonkeys.find((monkey) => monkey.name === 'Bowen')
    const raquel = flaggedMonkeys.find((monkey) => monkey.name === 'Raquel')

    assert.strictEqual(bowen.isNew, false)
    assert.strictEqual(raquel.isNew, false)

  })
  it('one new monkey', () => {
    assert.ok(testMonkeys)

    const flaggedMonkeys = flagNewMonkeys({ monkeys: testMonkeys, since: dateBetween })

    const bowen = flaggedMonkeys.find((monkey) => monkey.name === 'Bowen')
    const raquel = flaggedMonkeys.find((monkey) => monkey.name === 'Raquel')

    assert.strictEqual(bowen.isNew, true)
    assert.strictEqual(raquel.isNew, false)

  })
})
