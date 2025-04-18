import {
  EASY,
  ELITE,
  OVERWHELMING,
  STANDARD,
} from "../config/difficulty.config";
import { rand } from "./array-randomizer";
import { generateRandomCreatureName } from "./name-generator";

const generateDiceRoll = (diceRoll) => {
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

const mergeSkills = (modifiers, target) => {
  const result = structuredClone(target);

  for (const key in modifiers) {
    if (!target.hasOwnProperty(key)) continue;

    const modValue = modifiers[key];
    const targetValue = target[key];
    let valueToAdd;

    if (typeof modValue === "string" && modValue.includes("D")) {
      valueToAdd = generateDiceRoll(modValue);
    }

    if (typeof modValue === "number") {
      valueToAdd = modValue;

      if (typeof targetValue === "number") {
        result[key] += valueToAdd;
      }
    } else if (Array.isArray(modValue)) {
      if (Array.isArray(targetValue)) {
        result[key] = [...targetValue, ...modValue];
      } else {
        result[key] = modValue;
      }
    } else if (typeof modValue === "object" && modValue !== null) {
      result[key] = mergeSkills(modValue, targetValue);
    }
  }

  return result;
};

const getDifficulty = (antagonists, difficulty = EASY) => {
  const indexes = [EASY, STANDARD, ELITE, OVERWHELMING];
  return antagonists.difficulty[indexes.indexOf(difficulty)];
};

export const generate = (antagonists, difficulty = EASY) => {
  const generatedConfig = {};
  const selectedDifficulty = getDifficulty(antagonists, difficulty);
  generatedConfig.difficulty = { ...selectedDifficulty };

  const { damage, recovery, range } = selectedDifficulty;

  generatedConfig.difficulty.damage = rand(damage);

  // When armor and defense is defined we randomly choose one and drop the other
  if (generatedConfig.difficulty.armor > 0) {
    if (Math.random() < 0.5) {
      generatedConfig.difficulty.armor = 0;
    } else {
      generatedConfig.difficulty.defense = 0;
    }
  }

  if (recovery) {
    const rec = { ...recovery };
    generatedConfig.difficulty.recovery = {};
    generatedConfig.difficulty.recovery.bloodied = rand(rec.bloodied);
    generatedConfig.difficulty.recovery.cornered = rand(rec.cornered);
    generatedConfig.difficulty.recovery.overwhelmed = rand(rec.overwhelmed);
  }

  const mods = antagonists.mods;

  const { types, sizes, intelligence, role } = mods;

  generatedConfig.type = rand(types);

  const randomSize = rand(sizes);
  generatedConfig.size = randomSize.description;
  generatedConfig.difficulty.damage.damage_mod += randomSize.damage.damage_mod;

  const randomIntelligence = rand(intelligence);
  generatedConfig.difficulty.INT = generateDiceRoll(randomIntelligence.INT);

  generatedConfig.difficulty.range = generateDiceRoll(range);

  const randomRole = rand(role);
  generatedConfig.role = randomRole.description;
  generatedConfig.role_properties = randomRole.misc;

  generatedConfig.ability = rand(antagonists.abilities);
  generatedConfig.appearance = rand(antagonists.appearance);

  generatedConfig.difficulty = mergeSkills(
    randomRole,
    generatedConfig.difficulty
  );

  generatedConfig.name = generateRandomCreatureName();
  return generatedConfig;
};
