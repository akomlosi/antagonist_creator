import { EASY, ELITE, OVERWHELMING, STANDARD } from "../../difficulty.config";
import { APPEARANCE } from "../defaults/appearance";

export const titan = {
  [EASY]: {
    STR: 10,
    DEX: 2,
    CON: 8,
    WIL: 6,
    INT: 4,
    CHA: 0,
    attackSkill: 0,
    damage: "(1D12)+5",
    wounds: 1,
    awareness: 5,
    armor: 0,
    defense: 0,
    abilities: [],
    roleProperties: [],
    appearance: APPEARANCE.HUMANOID
  },
  [STANDARD]: {
    STR: 12,
    DEX: 10,
    CON: 10,
    WIL: 10,
    INT: 8,
    CHA: 0,
    attackSkill: 4,
    damage: "(1D12)+5",
    wounds: 1,
    awareness: 10,
    armor: 2,
    defense: 0,
    abilities: ["Charge"],
    roleProperties: [
      "+1 damage to its next attack per attack received. Resets after dealing damage.",
    ],
    appearance: APPEARANCE.HUMANOID
  },
  [ELITE]: {
    STR: 14,
    DEX: 13,
    CON: 13,
    WIL: 12,
    INT: 8,
    CHA: 0,
    attackSkill: 6,
    damage: "(2D10)+5",
    wounds: 2,
    awareness: 15,
    armor: 5,
    defense: 0,
    abilities: ["Charge", "Immune to all Conditions"],
    roleProperties: [
      "+1 damage to its next attack per attack received. Resets after dealing damage.",
    ],
    appearance: APPEARANCE.HUMANOID
  },
  [OVERWHELMING]: {
    STR: 16,
    DEX: 14,
    CON: 15,
    WIL: 14,
    INT: 8,
    CHA: 0,
    attackSkill: 10,
    damage: "(4D10)",
    wounds: 3,
    awareness: 20,
    armor: 5,
    defense: 3,
    abilities: [
      "Charge",
      "Immune to all Conditions",
      "Can initiate attack 2 times/round",
    ],
    roleProperties: [
      "+1 damage to its next attack per attack received. Resets after dealing damage.",
    ],
    appearance: APPEARANCE.HUMANOID
  },
};
