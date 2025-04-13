export const EASY = "easy";
export const STANDARD = "standard";
export const ELITE = "elite";
export const OVERWHELMING = "overwhelming";

// Extend with Elite and Overwhelming
// if you wanna have quite impossible challenges... I don't...
export const availableDifficulties = [EASY, STANDARD];

export const encounterDifficulty = [
  // one-member crew
  {
    [EASY]: [[EASY]],
    [STANDARD]: [[STANDARD], [EASY, EASY]],
    [ELITE]: [
      [ELITE],
      [STANDARD, STANDARD],
      [STANDARD, EASY, EASY],
      [EASY, EASY, EASY],
    ],
    [OVERWHELMING]: [
      [OVERWHELMING],
      [ELITE, ELITE],
      [ELITE, STANDARD, STANDARD],
      [ELITE, EASY, EASY, EASY],
      [STANDARD, STANDARD, STANDARD],
      [STANDARD, STANDARD, EASY, EASY, EASY],
      [EASY, EASY, EASY, EASY],
    ],
  },
  // three-member crew
  {
    [EASY]: [
      [EASY, EASY, EASY],
      [EASY, STANDARD],
    ],
    [STANDARD]: [
      [STANDARD, STANDARD, STANDARD],
      [EASY, EASY, STANDARD, STANDARD],
      [EASY, EASY, EASY, EASY, STANDARD],
      [EASY, EASY, EASY, EASY, EASY, EASY],
      [ELITE, EASY, EASY],
    ],
    [ELITE]: [],
    [OVERWHELMING]: [],
  },
];
