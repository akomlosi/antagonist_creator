export const ROLES = {
  BRUTE: "Brute",
  LURKER: "Lurker",
  RANGED: "Ranged",
  SWARM: "Swarm",
  PSYCHIC: "Psychic",
};
export const creatureRolesList = Object.keys(ROLES);

export const creatureStatsByRole = {
  [ROLES.BRUTE]: {
    STR: 1,
    DEX: -1,
    CON: 1,
    damage: 2,
    attackSkill: -2,
    damage: 2,
    awareness: -2,
    roleProperties: [
      "+1 to Hit location rolls",
      "Brutes have no ranged attacks",
      "Brutes can move twice",
      "+1 STR, -1 DEX, +1 CON (these values are already applied to the relevant skills)",
      "+2 Damage (already applied to Damage value)",
      "-2 Attack skill (already applied to Attack Skill value)",
      "-2 Awareness (already applied to Awareness value)",
    ],
  },
  [ROLES.LURKER]: {
    DEX: 2,
    CON: -1,
    awareness: 2,
    roleProperties: [
      "Lurkers do not suffer an attack of opportunity when disengaging from combat",
      "Lurkers favor melee combat over their ranged abilities",
      "+2 DEX, -1 CON (these values are already applied to the relevant skills)",
      "+5 Attack skill against opponents not directly targeting them (apply separately to Attack Skill value when needed)",
      "+2 Awareness (already applied to Awareness value)",
    ],
  },
  [ROLES.RANGED]: {
    STR: -1,
    DEX: 1,
    CON: -1,
    WIL: 1,
    awareness: 2,
    roleProperties: [
      "Ranged creatures favor ranged attacks over their melee abilities",
      "-1 STR, +1 DEX, -1 CON, +1 WIL (these values are already applied to the relevant skills)",
      "+1 to Hit location rolls",
      "+2 Ranged Attack skill, -2 Melee Attack skill (apply separately to Attack Skill value when needed)",
      "+2 Awareness (already applied to Awareness value)",
    ],
  },
  [ROLES.SWARM]: {
    damage: "-(1D10)",
    attackSkill: 5,
    roleProperties: [
      "Swarms have no ranged attacks",
      "Swarms can move twice per turn",
      "+5 Attack skill (already applied to Attack Skill value)",
      "-1(D10) Damage",
      "Swarms larger than a single human (made by rolling 19-20 on the Size table) attack every single character at once",
      "Attacks against Swarms do not roll on the Hit Location table—all damage is automatically modified by +1",
    ],
  },
  [ROLES.PSYCHIC]: {
    damage: "-(1D10)",
    CON: -1,
    WIL: 3,
    roleProperties: [
      "-1 CON, +3 WIL (these values are already applied to the relevant skills)",
      "Psychic creatures favor ranged attacks over their melee abilities",
      "Psychic opponents always roll on the Psychic Ability table instead of the standard one",
    ],
  },
};
