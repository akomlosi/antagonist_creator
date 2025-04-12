function rand(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(
      `A rand függvény csak tömböt fogad el. ${typeof arr} ${JSON.stringify(
        arr
      )}`
    );
  }

  if (arr.length === 0) {
    throw new Error("A tömb üres, nem lehet elemet választani.");
  }

  if (arr.length === 1) {
    return arr[0];
  }

  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

const creatureNameSyllables = [
  [
    "Ael",
    "Ar",
    "At",
    "Af",
    "Am",
    "Ain",
    "Bo",
    "Baf",
    "Bet",
    "Bin",
    "Buk",
    "Bon",
    "Bru",
    "Cal",
    "Cor",
    "Cen",
    "Col",
    "De",
    "Dra",
    "Din",
    "Deo",
    "Dak",
    "Dot",
    "Er",
    "Eo",
    "Eni",
    "Eto",
    "Eal",
    "Eth",
    "Emi",
    "Eos",
    "Foh",
    "Fel",
    "Fan",
    "Fri",
    "Fik",
    "Faw",
    "Flo",
    "Gru",
    "Gon",
    "Gas",
    "Gy",
    "Gli",
    "Gea",
    "Got",
    "Hun",
    "Hol",
    "Hra",
    "Hib",
    "Had",
  ],
  [
    "Hu",
    "Hol",
    "Has",
    "Hof",
    "Hev",
    "Io",
    "Im",
    "Ir",
    "Iok",
    "Iv",
    "Ix",
    "Jo",
    "Je",
    "Jun",
    "Jas",
    "Jho",
    "Jen",
    "Jiv",
    "Jox",
    "Jer",
    "Jis",
    "Kro",
    "Ke",
    "Kal",
    "Koe",
    "Klu",
    "Kyn",
    "Kva",
    "Kol",
    "Kes",
    "Kut",
    "Kso",
    "Kae",
    "Kib",
    "Li",
    "Lon",
    "Ler",
    "La",
    "Loy",
    "Lun",
    "Les",
    "Lam",
    "Lef",
    "Luz",
    "Lop",
    "Mo",
    "Met",
    "Maf",
    "Mig",
    "Mox",
  ],
  [
    "Mus",
    "Myn",
    "Med",
    "Mol",
    "Mec",
    "Nio",
    "Nu",
    "Ner",
    "Nas",
    "Or",
    "Otu",
    "Owa",
    "Ogi",
    "Ofe",
    "Ovy",
    "Olo",
    "Oma",
    "Pro",
    "Pem",
    "Pas",
    "Pu",
    "Puc",
    "Pyf",
    "Piz",
    "Qu",
    "Reo",
    "Rin",
    "Ra",
    "Rol",
    "Se",
    "Sov",
    "Sag",
    "Siz",
    "Suf",
    "To",
    "Til",
    "Tra",
    "Tuv",
    "Uo",
    "Un",
    "Ven",
    "Vo",
    "Vas",
    "Xa",
    "Xon",
    "Yeo",
    "Yl",
    "Yt",
    "Zas",
    "Zo",
  ],
];

function generateRandomCreatureName(syllables) {
  const syllableCount = Math.floor(Math.random() * 3) + 1; // 1 to 3
  const result = [];

  if (syllableCount >= 1) {
    result.push(randomFrom(syllables[0]));
  }
  if (syllableCount >= 2) {
    result.push(randomFrom(syllables[1]));
  }
  if (syllableCount === 3) {
    result.push(randomFrom(syllables[2]));
  }

  return result.join("").toLowerCase();
}

// Helper: véletlenszerű elem választása egy tömbből
function randomFrom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

const generateDiceRoll = (diceRoll) => {
  const simplePattern = /^(\d+)?([+-])?\(?(\d+)D(\d+)\)?$/i;

  const match = diceRoll.match(simplePattern);
  if (!match) {
    throw new Error(`Hibás dobás formátum: "${diceRoll}"`);
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
      let valueToAdd = modValue;

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

export const generate = (antagonists) => {
  const generatedConfig = {};
  const randomDifficulty = rand(antagonists.difficulty);
  generatedConfig.difficulty = { ...randomDifficulty };

  const { damage, recovery, range } = randomDifficulty;

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

  console.log(generatedConfig);
  generatedConfig.name = generateRandomCreatureName(creatureNameSyllables);
  return generatedConfig;
};
