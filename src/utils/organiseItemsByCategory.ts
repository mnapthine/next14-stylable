/**
 *
 * @param items
 * @returns An object with keys as categories and values as arrays of items
 */
export function organiseItemsByCategory<
  T extends { category?: string; weight: number }
>(items: T[]): { [category: string]: T[] } {
  const grouped = items.reduce((acc: { [key: string]: T[] }, item: T) => {
    const category: string = item.category || "";
    acc[category] = acc[category] || [];
    acc[category].push(item);
    return acc;
  }, {});

  Object.keys(grouped).forEach((category: string) => {
    grouped[category].sort((a: T, b: T) => a.weight - b.weight);
  });

  return grouped;
}
