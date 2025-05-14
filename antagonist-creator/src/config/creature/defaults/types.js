export const CREATURE_TYPE = {
  GUARDIAN: "Guardian",
  ABBERATION: "Abberation",
  SYNTHETIC: "Synthetic",
  LOCAL_FAUNA: "Local Fauna",
};
export const creatureTypes = {
  offPlanet: [
    CREATURE_TYPE.GUARDIAN,
    CREATURE_TYPE.ABBERATION,
    CREATURE_TYPE.SYNTHETIC,
  ],
  planetSurface: [
    CREATURE_TYPE.GUARDIAN,
    CREATURE_TYPE.ABBERATION,
    CREATURE_TYPE.LOCAL_FAUNA,
  ],
};
