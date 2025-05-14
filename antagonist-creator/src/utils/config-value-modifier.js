export const modifyConfigValue = (config, configKey, newValue) => {
  const _config = { ...config };

  if (_config[configKey]) {
    if (typeof newValue === "number") {
      if (typeof _config[configKey] === "string") {
        _config[configKey] += newValue > 0 ? `+${newValue}` : `-${newValue}`;
      } else if (typeof _config[configKey] === "number") {
        _config[configKey] += newValue;
      }
    }
  }
  return _config;
};
