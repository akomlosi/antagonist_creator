import { appearance } from "../../config/creature/defaults/appearance";
import { rand } from "../array-randomizer";

export const appearanceGenerator = (_, generatedConfig) => {
  const randomAppearance = rand(appearance);
  return { ...generatedConfig, appearance: randomAppearance };
};
