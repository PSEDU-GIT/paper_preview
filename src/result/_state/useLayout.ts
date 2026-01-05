export const useLayout = (heights: number[], layer: number) => {
  return heights.reduce((a, b) => {
    const curr = a[a.length - 1 < 0 ? 0 : a.length - 1] ?? [];
    const sum = curr.reduce((a, b) => a + b, 0);

    if (sum + b <= layer) return [...a.slice(0, -1), curr.concat(b)];

    return [...a, [b]];
  }, [] as number[][]);
};
