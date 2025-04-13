const STORAGE_KEY = "adtw:creatures";
export const save = (config, customLabel) => {
  try {
    const storedItem = read() || {};
    storedItem[customLabel] = config;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(storedItem));
  } catch {}
};

export const read = () => {
  try {
    const storedItem = window.localStorage.getItem(STORAGE_KEY);
    if (!storedItem) {
      return null;
    }
    return JSON.parse(storedItem);
  } catch {}
};

export const clearAll = () => {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {}
};
