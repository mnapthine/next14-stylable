import { visit, CONTINUE, SKIP } from "unist-util-visit";
import { isElement } from "hast-util-is-element";
import { Element } from "hast";
import GithubSlugger from "github-slugger";

const rehypeWrapSections = () => {
  const slugger = new GithubSlugger();

  return (tree: any) => {
    let section: Element | null = null;
    const sections: Element[] = [];
    const headings: string[] = ["h2", "h3", "h4", "h5"];
    let nodesToRemove: { parent: Element; index: number }[] = [];

    visit(
      tree,
      (node: Element, index: number | undefined, parent: Element | null) => {
        if (!parent || index === undefined) return CONTINUE; // Ensure parent and index are valid

        // Check if the node is a heading
        if (isElement(node, headings)) {
          if (section) {
            sections.push(section); // Store the completed section
          }
          // Start a new section for the heading
          section = {
            type: "element",
            tagName: "div",
            properties: {
              id: "", // Initialize id to empty string
            },
            children: [node], // Start the section with the current heading node
          };
          nodesToRemove.push({ parent, index }); // Mark the heading for removal from its parent

          // Iterate through the children of the heading to extract text content
          node.children.forEach((child) => {
            if (child.type === "text" && child.value) {
              section!.properties.id = slugger.slug(child.value.trim()); // Generate slug from text content
              return SKIP; // Exit the loop after finding the first text node
            }
          });

          return SKIP; // Skip visiting children of the heading
        }

        if (section) {
          section.children.push(node); // Add node to the current section
          nodesToRemove.push({ parent, index }); // Mark the node for removal
          return SKIP;
        }
      }
    );

    // Append any remaining open section
    if (section) {
      sections.push(section);
    }

    // Remove all marked nodes from their original parent
    nodesToRemove
      .sort((a, b) => b.index - a.index)
      .forEach(({ parent, index }) => {
        parent.children.splice(index, 1); // Remove the node from its original position
      });

    // Append all collected sections back to the tree
    sections.forEach((sec) => {
      tree.children.push(sec);
    });
  };
};

export default rehypeWrapSections;
