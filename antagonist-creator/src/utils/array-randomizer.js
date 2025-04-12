export function rand(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`Array expedted. ${typeof arr} ${JSON.stringify(arr)}`);
  }

  if (arr.length === 0) {
    throw new Error("Empty array");
  }

  if (arr.length === 1) {
    return arr[0];
  }

  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}
