import { EASY, ELITE, OVERWHELMING, STANDARD } from "../../difficulty.config";
import { APPEARANCE } from "../defaults/appearance";

export const brahmari = {
  [EASY]: {
    STR: 6,
    DEX: 8,
    CON: 4,
    WIL: 4,
    INT: 3,
    CHA: 0,
    attackSkill: 3,
    damage: "(1D12)",
    wounds: 1,
    awareness: 5,
    armor: 0,
    defense: 0,
    abilities: [],
    roleProperties: ["Can initiate attack 2 times/round"],
    appearance: APPEARANCE.QUADRUPED
  },
  [STANDARD]: {
    STR: 11,
    DEX: 11,
    CON: 10,
    WIL: 10,
    INT: 8,
    CHA: 0,
    attackSkill: 5,
    damage: "(1D8)+5",
    wounds: 1,
    awareness: 10,
    armor: 0,
    defense: 1,
    abilities: ["Radiation"],
    roleProperties: [
      "Every round spent near a Brahmari swarm inflicts 1D20 rads.",
      "Can initiate attack 2 times/round",
    ],
    appearance: APPEARANCE.QUADRUPED
  },
  [ELITE]: {
    STR: 12,
    DEX: 15,
    CON: 12,
    WIL: 12,
    INT: 8,
    CHA: 0,
    attackSkill: 8,
    damage: "(2D12)",
    wounds: 1,
    awareness: 15,
    armor: 0,
    defense: 8,
    abilities: ["Radiation"],
    roleProperties: [
      "Every round spent near a Brahmari swarm inflicts 2D20 rads.",
      "Can initiate attack 2 times/round",
    ],
    appearance: APPEARANCE.QUADRUPED
  },
  [OVERWHELMING]: {
    STR: 12,
    DEX: 14,
    CON: 15,
    WIL: 14,
    INT: 12,
    CHA: 0,
    attackSkill: 10,
    damage: "(1D10)+10",
    wounds: 2,
    awareness: 20,
    armor: 0,
    defense: 5,
    abilities: ["Radiation"],
    roleProperties: [
      "Every round spent near a Brahmari swarm inflicts 3D20 rads.",
      "Can initiate attack 2 times/round",
    ],
    appearance: APPEARANCE.QUADRUPED
  },
};
