export const armorDefenseGenerator = (_, generatedConfig) => {
  const config = { ...generatedConfig };
  if (config.armor > 0) {
    if (Math.random() < 0.5) {
      config.armor = 0;
    } else {
      config.defense = 0;
    }
  }
  return { ...generatedConfig, ...config };
};
