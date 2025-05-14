import { creatureDrive } from "../../config/creature/defaults/drive";
import { rand } from "../array-randomizer";

export const driveGenerator = (userConfig, generatedConfig) => {
  const drive = rand(creatureDrive);
  return { ...generatedConfig, drive };
};
