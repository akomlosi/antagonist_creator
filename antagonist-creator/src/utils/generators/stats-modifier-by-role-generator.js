import { creatureStatsByRole } from "../../config/creature/defaults/roles";
import { modifyConfigValue } from "../config-value-modifier";

export const statsModifierByRoleGenerator = (userConfig, generatedConfig) => {
  const statsByRole = creatureStatsByRole[userConfig.role];
  Object.entries(statsByRole).forEach(([key, value]) => {
    if (generatedConfig[key]) {
      if (typeof value === "number") {
        if (typeof generatedConfig[key] === "string") {
          generatedConfig[key] += value > 0 ? `+${value}` : `-${value}`;
        } else if (typeof generatedConfig[key] === "number") {
          generatedConfig[key] += value;
        }
      }
    }
  });

  return { ...generatedConfig, roleProperties: statsByRole.roleProperties };
};
