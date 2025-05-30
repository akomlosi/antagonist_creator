import { EASY, ELITE, OVERWHELMING, STANDARD } from "../../difficulty.config";

export const statsByDifficulty = {
  [EASY]: {
    description: "Easy",
    STR: 8,
    DEX: 4,
    CON: 8,
    WIL: 6,
    INT: 6,
    CHA: 0,
    damage: [{ attackSkill: 2, damage: "(1D10)", damageMod: 5 }],
    attackNum: 1,
    abilityNum: 1,
    range: "1+(1D10)",
    wounds: 1,
    awareness: 5,
    armor: 0,
    defense: 0,
  },
  [STANDARD]: {
    description: "Standard",
    STR: 12,
    DEX: 12,
    CON: 10,
    WIL: 10,
    INT: 8,
    CHA: 0,
    damage: [
      {
        attackSkill: 5,
        damage: "(1D10)",
        damageMod: 5
      },
      {
        attackSkill: 2,
        damage: "(2D12)",
        damageMod: 0
      },
    ],
    attackNum: 1,
    abilityNum: 1,
    range: "2+(1D10)",
    recovery: {
      bloodied: ["+2 Damage", "Attempts to flee"],
      cornered: ["+2 Defense", "+2 Attack skill"],
      overwhelmed: ["-2 Defense", "Attempts to flee"],
    },
    wounds: 1,
    awareness: 10,
    armor: 2,
    defense: 2,
  },
  [ELITE]: {
    description: "Elite",
    STR: 14,
    DEX: 14,
    CON: 12,
    WIL: 12,
    INT: 8,
    CHA: 0,
    damage: [
      {
        attackSkill: 8,
        damage: "(2D12)",
        damageMod: 0
      },
      {
        attackSkill: 4,
        damage: "(2D10)",
        damageMod: 5
      },
    ],
    attackNum: 1,
    abilityNum: 2,
    range: "3+(1D10)",
    recovery: {
      bloodied: ["+5 Damage", "+2 Defense"],
      cornered: ["+5 Defense", "+5 Attack skill"],
      overwhelmed: ["-2 Defense", "Attempts to flee"],
    },
    wounds: 2,
    awareness: 15,
    armor: 4,
    defense: 4,
  },
  [OVERWHELMING]: {
    description: "Overwhelming",
    STR: 16,
    DEX: 14,
    CON: 15,
    WIL: 14,
    INT: 8,
    CHA: 0,
    damage: [
      {
        attackSkill: 10,
        damage: "(3D12)",
        damageMod: 0
      },
      {
        attackSkill: 5,
        damage: "(3D10)",
        damageMod: 5
      },
    ],
    attackNum: 2,
    abilityNum: 3,
    range: "3+(1D10)",
    recovery: {
      bloodied: ["+7 Damage", "+5 Defense"],
      cornered: ["+7 Defense", "+7 Attack skill"],
      overwhelmed: ["-2 Defense", "Attempts to flee"],
    },
    wounds: 3,
    awareness: 20,
    armor: 5,
    defense: 5,
  },
};
