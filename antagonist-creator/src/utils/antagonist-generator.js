import { abilityGenerator } from "./generators/ability-generator";
import { appearanceGenerator } from "./generators/appearance-generator";
import { armorDefenseGenerator } from "./generators/armor-defense-generator";
import { damageGenerator } from "./generators/damage-generator";
import { damageModifierBySizeGenerator } from "./generators/damage-modifier-by-size-generator";
import { driveGenerator } from "./generators/drive-generator";
import { intelligenceModifierGenerator } from "./generators/intelligence-generator";
import { generatorPipeline } from "./generators/pipeline/pipeline";
import { rangeGenerator } from "./generators/range-generator";
import { recoveryReactionsGenerator } from "./generators/recovery-reactions-generator";
import { statsGenerator } from "./generators/stats-generator";
import { statsModifierByRoleGenerator } from "./generators/stats-modifier-by-role-generator";
import { uniqueTraitsGenerator } from "./generators/unique-trait-generator";

const mergeSkills = (modifiers, target) => {
  const result = structuredClone(target);

  for (const key in modifiers) {
    if (!target.hasOwnProperty(key)) continue;

    const modValue = modifiers[key];
    const targetValue = target[key];
    let valueToAdd;

    //    if (typeof modValue === "string" && modValue.includes("D")) {
    //      valueToAdd = generateDiceRoll(modValue);
    //    }

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

export const generate = (userConfig) => {
  const generatedConfig = generatorPipeline(userConfig, [
    // TODO: add type and role to the config too!
    // Getting the basic creature stats
    statsGenerator,
    // Defining and flattening the damage. A random damage stat is calculated now
    damageGenerator,
    // Generating a random creature size and add its damage modifier to the damage stat
    damageModifierBySizeGenerator,
    // Generating a random creature drive
    driveGenerator,
    // Based on creature intelligence it overrides the original INT value with a generated dice-roll (page 269.)
    intelligenceModifierGenerator,
    // Random range generated from a dice roll
    rangeGenerator,
    // Generating random recovery reactions if available
    recoveryReactionsGenerator,
    // By role we apply further stats modifications
    statsModifierByRoleGenerator,
    // Applies random unique traits (page 278)
    uniqueTraitsGenerator,
    // Generates as many random abilites as the current difficulty requires
    abilityGenerator,
    // Generates random appearance for hit locations
    appearanceGenerator,
    // When armor and defense is defined we randomly choose one and drop the other
    armorDefenseGenerator,
  ]);
  console.log("generated: ", generatedConfig);
  return generatedConfig;
};
