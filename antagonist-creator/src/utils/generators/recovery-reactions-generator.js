import { rand } from "../array-randomizer";

export const recoveryReactionsGenerator = (_, generatedConfig) => {
  const { recovery } = generatedConfig;
  if (!recovery) {
    return generatedConfig;
  }
  const rec = { ...recovery };
  const generatedRecovery = {};
  generatedRecovery.bloodied = rand(rec.bloodied);
  generatedRecovery.cornered = rand(rec.cornered);
  generatedRecovery.overwhelmed = rand(rec.overwhelmed);
  return { ...generatedConfig, recovery: generatedRecovery };
};
