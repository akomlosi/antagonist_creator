import { generateDiceRoll } from "../generate-dice-roll";

export const rangeGenerator = (_, generatedConfig) => {
  const { range } = generatedConfig;
  const calculatedRange = generateDiceRoll(range);
  return { ...generatedConfig, range: calculatedRange };
};
