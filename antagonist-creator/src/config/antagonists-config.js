export const config = {
  antagonists: {
    difficulty: [
      {
        description: "Easy",
        STR: 8,
        DEX: 4,
        CON: 8,
        WIL: 6,
        INT: 6,
        CHA: 0,
        damage: [
          {
            attack_skill: 2,
            damage: "(1D10)",
            damage_mod: 5,
          },
        ],
        attack_num: 1,
        range: "1+(1D10)",
        wounds: 1,
        awareness: 5,
        armor: 0,
        defense: 0,
      },
      {
        description: "Standard",
        STR: 12,
        DEX: 12,
        CON: 10,
        WIL: 10,
        INT: 8,
        CHA: 0,
        damage: [
          {
            attack_skill: 5,
            damage: "(1D10)",
            damage_mod: 5,
          },
          {
            attack_skill: 2,
            damage: "(2D12)",
            damage_mod: 0,
          },
        ],
        attack_num: 1,
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
      {
        description: "Elite",
        STR: 14,
        DEX: 14,
        CON: 12,
        WIL: 12,
        INT: 8,
        CHA: 0,
        damage: [
          {
            attack_skill: 8,
            damage: "(2D12)",
            damage_mod: 0,
          },
          {
            attack_skill: 4,
            damage: "(2D10)",
            damage_mod: 5,
          },
        ],
        attack_num: 1,
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
      {
        description: "Overwhelming",
        STR: 16,
        DEX: 14,
        CON: 15,
        WIL: 14,
        INT: 8,
        CHA: 0,
        damage: [
          {
            attack_skill: 10,
            damage: "(3D12)",
            damage_mod: 0,
          },
          {
            attack_skill: 5,
            damage: "(3D10)",
            damage_mod: 5,
          },
        ],
        attack_num: 2,
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
    ],
    mods: {
      types: ["Guardian", "Abberation", "Synthetic"], // TODO: handle Guardians properly
      sizes: [
        {
          description: "Rodent to housecat",
          damage: {
            damage_mod: -2,
          },
        },
        {
          description: "Large dog to wildcat",
          damage: {
            damage_mod: -1,
          },
        },
        {
          description: "Humanoid in size",
          damage: {
            damage_mod: 0,
          },
        },
        {
          description: "Larger than human, like a huge gorilla",
          damage: {
            damage_mod: 1,
          },
        },
        {
          description: "Cow to alligator",
          damage: {
            damage_mod: 2,
          },
        },
      ],
      intelligence: [
        {
          description: "Animal-like",
          INT: "6-(1D4)",
        },
        {
          description: "Human-like",
          INT: "6+(1D8)",
        },
        {
          description: "Above human",
          INT: "12+(1D8)",
        },
      ],
      role: [
        {
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
        {
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
        {
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
        {
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
        {
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
      ],
    },
    abilities: [
      "Acid blood",
      "Acid Spray",
      "Carapace",
      "Cleave/Spread Shot",
      "Crawler",
      "Dazzle",
      "Drain",
      "Entangle",
      "Explosive",
      "Flame Attack",
      "Immune",
      "Infectous",
      "Metallic Claws",
      "Paralyzing Bite/Shot",
      "Putrid",
      "Rebirth",
      "Regenerate",
      "Tough",
      "Uncanny Speed",
      "Vicious",
    ],
    appearance: ["humanoid", "quadruped/sextuped", "serpentine"],
  },
};
