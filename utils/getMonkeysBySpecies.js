export const getMonkeysBySpecies = (monkeys) =>
  monkeys
    .map((monkey) => monkey.species) // get all species
    .filter((specie, index, species) => species.indexOf(specie) === index) // keep all species once
    .map((specie) => ({ specie, monkeys: monkeys.filter((monkey) => monkey.species === specie) })) // create object with monkeys per species
