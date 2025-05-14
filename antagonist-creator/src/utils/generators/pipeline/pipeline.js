function createBaseConfig() {
  return {
    difficulty: "",
    STR: 0,
    DEX: 0,
    CON: 0,
    WIL: 0,
    INT: 0,
    CHA: 0,
    damage: [],
    abilityNum: 0,
    attackNum: 0,
    range: 0,
    recovery: null,
    wounds: 0,
    awareness: 0,
    armor: 0,
    defense: 0,
    size: "",
    roleProperties: [],
    abilities: [],
    appearance: "",
  };
}

export const generatorPipeline = (userConfig = {}, generators = []) =>
  generators.reduce(
    (currentConfig, nextGeneratorFn) =>
      nextGeneratorFn(userConfig, currentConfig),
    createBaseConfig()
  );
