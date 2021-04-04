/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import assert from 'assert'
import { getMonkeysBySpecies } from './getMonkeysBySpecies'

const testMonkeys = [
  {
    _Id: '602f88168c54f999087296fd',
    species: 'Blond capuchin',
  },
  {
    _Id: '602f881606f848668a28102a',
    species: 'Blond capuchin',
  },
  {
    _Id: '602f88168aea983ef56a5dc4',
    species: 'White-nosed saki',
  },
  {
    _Id: '602f8816013638da2c913212',
    species: 'White-nosed saki',
  },
  {
    _Id: '602f8816e3aa400e25ac0b85',
    species: 'White-nosed saki',
  },
  {
    _Id: '602f8816748b40c8013c26fa',
    species: 'Northern muriqui',
  },
]

describe('getMonkeysBySpecies.test.js', () => {
  it('get monkeys by species', () => {
    assert.ok(testMonkeys)

    const species = getMonkeysBySpecies(testMonkeys)

    assert.strictEqual(
      species.find((specie) => specie.specie === 'Blond capuchin').monkeys.length,
      2
    )
    assert.strictEqual(
      species.find((specie) => specie.specie === 'White-nosed saki').monkeys.length,
      3
    )
    assert.strictEqual(
      species.find((specie) => specie.specie === 'Northern muriqui').monkeys.length,
      1
    )

    species.forEach((specie) => {
      specie.monkeys.forEach((monkey) => {
        assert.strictEqual(monkey.species, specie.specie)
      })
    })
  })
})
