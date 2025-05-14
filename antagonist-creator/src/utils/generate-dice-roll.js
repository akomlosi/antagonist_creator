export const generateDiceRoll = (diceRoll) => {
  const simplePattern = /^(\d+)?([+-])?\(?(\d+)D(\d+)\)?$/i;

  const match = diceRoll.match(simplePattern);
  if (!match) {
    throw new Error(`Bad diceroll format: "${diceRoll}"`);
  }

  const baseValue = parseInt(match[1], 10) || 0;
  const operator = match[2] || null;
  const numberOfDice = parseInt(match[3], 10);
  const diceSides = parseInt(match[4], 10);

  if (![4, 6, 8, 10, 12, 20, 100].includes(diceSides)) {
    throw new Error(`not supported format: ${diceRoll}`);
  }

  let rollTotal = 0;
  for (let i = 0; i < numberOfDice; i++) {
    rollTotal += Math.floor(Math.random() * diceSides) + 1;
  }

  if (operator === "+") return baseValue + rollTotal;
  if (operator === "-") return baseValue - rollTotal;
  return rollTotal;
};
