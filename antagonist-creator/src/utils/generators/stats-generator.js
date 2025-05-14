import { statsByDifficulty } from "../../config/creature/defaults/stats-by-difficulty";

export const statsGenerator = (userConfig, generatedConfig) => {
  const stats = statsByDifficulty[userConfig.difficulty];
  const updatedConfig = { ...generatedConfig, ...stats };
  return updatedConfig;
};
