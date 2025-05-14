import { rand } from "../array-randomizer";

export const damageGenerator = (_, generatedConfig) => {
  const { damage } = generatedConfig;
  const randomDamage = rand(damage);
  // Intentional overriding damage object to flatten the config shape
  return { ...generatedConfig, ...randomDamage };
};
