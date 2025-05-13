export const ROLES = {
  BRUTE: "Brute",
  LURKER: "Lurker",
  RANGED: "Ranged",
  SWARM: "Swarm",
  PSYCHIC: "Psychic",
};
export const creatureRolesList = Object.keys(ROLES);

export const creatureRolesByType = {
  [BRUTE]: {
    description: "Brute",
    STR: 1,
    DEX: -1,
    CON: 1,
    damage: {
      damage_mod: 2,
      attack_skill: -2,
    },
    awareness: -2,
    misc: [
      "+1 to Hit location rolls",
      "Brutes have no ranged attacks",
      "Brutes can move twice",
    ],
  },
  [LURKER]: {
    description: "Lurker",
    DEX: 2,
    CON: -1,
    damage: {
      damage_mod: 0,
      attack_skill: 5,
    },
    awareness: 2,
    misc: [
      "Lurkers do not suffer an attack of opportunity when disengaging from combat",
      "Lurkers favor melee combat over their ranged abilities",
      "+5 Attack skill against opponents not directly targeting them",
    ],
  },
  [RANGED]: {
    description: "Ranged",
    STR: -1,
    DEX: 1,
    CON: -1,
    WIL: 1,
    damage: {
      damage_mod: 0,
      attack_skill: 0,
    },
    misc: [
      "Ranged creatures favor ranged attacks over their melee abilities",
      "+1 to Hit location rolls",
      "+2 Ranged Attack skill, -2 Melee Attack skill",
      "Brutes can move twice",
    ],
  },
  [SWARM]: {
    description: "Swarm",
    damage: {
      damage_mod: "-(1D10)",
      attack_skill: 5,
    },
    misc: [
      "Swarms have no ranged attacks",
      "Swarms can move twice per turn",
      "Swarms larger than a single human (made by rolling 19-20 on the Size table) attack every single character at once",
      "Attacks against Swarms do not roll on the Hit Location table—all damage is automatically modified by +1",
    ],
  },
  [PSYCHIC]: {
    description: "Psychic",
    damage: {
      damage_mod: "-(1D10)",
      attack_skill: 5,
    },
    CON: -1,
    WIL: 3,
    misc: [
      "Psychic creatures favor ranged attacks over their melee abilities",
      "Psychic opponents always roll on the Psychic Ability table instead of the standard one",
    ],
  },
};
