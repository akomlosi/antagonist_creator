import { creatureIntelligence } from "../../config/creature/defaults/intelligence";
import { rand } from "../array-randomizer";
import { generateDiceRoll } from "../generate-dice-roll";

export const intelligenceModifierGenerator = (_, generatedConfig) => {
  const { description, INT } = rand(creatureIntelligence);
  const reGeneratedIntelligenceValue = generateDiceRoll(INT);
  return {
    ...generatedConfig,
    INT: reGeneratedIntelligenceValue,
    intelligence: description,
  };
};
