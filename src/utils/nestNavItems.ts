export interface NavItem {
  title: string;
  url: string;
  menuTitle?: string | false; // Optional title for the menu
  weight: number; // Added to specify the order of navigation items
}

export interface NestedNavItem extends NavItem {
  children: NestedNavItem[];
}

export function nestNavItems(items: NavItem[]): NestedNavItem[] {
  const root: NestedNavItem = {
    title: "Root",
    menuTitle: false,
    url: "",
    weight: 0,
    children: [],
  };

  // Sort items first by URL to ensure parents come before children, then by weight
  const sortedItems = items.sort((a, b) => {
    const urlCompare = a.url.localeCompare(b.url);
    return urlCompare !== 0 ? urlCompare : a.weight - b.weight;
  });

  sortedItems.forEach((item) => {
    const parts = item.url.split("/").filter(Boolean); // Remove empty parts
    let currentLevel: NestedNavItem = root; // Start at the root

    // Iterate over the parts of the URL, descending through the structure
    parts.forEach((part, index) => {
      const path =
        (index === 0 ? "/" : "/") + parts.slice(0, index + 1).join("/");
      let child = currentLevel.children.find((c) => c.url === path);

      if (!child) {
        child = {
          title: "",
          menuTitle: item.menuTitle || false,
          url: path,
          weight: item.weight,
          children: [],
        };
        currentLevel.children.push(child);
      }

      currentLevel = child;
    });

    // Set the title for the deepest level node
    currentLevel.title = item.title;
    currentLevel.weight = item.weight; // Ensure the weight is set
  });

  // Sort each level's children by weight
  const sortChildrenByWeight = (node: NestedNavItem) => {
    node.children.sort((a, b) => a.weight - b.weight);
    node.children.forEach(sortChildrenByWeight); // Recursively sort children
  };

  sortChildrenByWeight(root);

  return root.children;
}
