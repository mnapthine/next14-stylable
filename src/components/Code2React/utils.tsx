import { slug } from "github-slugger";
import { ReactNode } from "react";

export const isExternalLink = (url: string): boolean =>
  /^(http:\/\/|https:\/\/)/.test(url);

export const slugFromNode = (children?: ReactNode) => {
  return children ? slug(children.toString()) : undefined;
};

export function parseClassnameAndOptions(inputStr: string): {
  className?: string;
  options: { live?: boolean; preview?: boolean; twoCol?: boolean };
} {
  // Extract the classname and optionsString encased in {}
  const [className, optionsString] = inputStr.split(/\{(.+?)\}$/);

  let options = null;
  if (optionsString) {
    // Format optionsString into valid JSON format
    const jsonStr = `{${optionsString.replace(/(\w+):/g, '"$1":')}}`;
    try {
      // Parse the corrected JSON string into an object
      options = JSON.parse(jsonStr);
    } catch (e) {
      console.error("Parsing error:", e);
    }
  }

  return {
    className: className?.trim(),
    options: options,
  };
}

export function wrapSections(html: string): string {
  const lines = html.split("\n");
  const result: string[] = [];
  const stack: string[] = []; // Stack to keep track of opened tags

  lines.forEach((line) => {
    // Check for heading start
    const startMatch = line.match(/<(h[2345])>/);
    if (startMatch) {
      const currentLevel = parseInt(startMatch[1].substring(1), 10);

      // Close all tags until we find a level that is less than current or the stack is empty
      while (
        stack.length > 0 &&
        getLevel(stack[stack.length - 1]) >= currentLevel
      ) {
        const lastTag = stack.pop();
        result.push(lastTag === "h2" ? "</section>" : "</div>");
      }

      // Open new wrapper tag based on the heading
      const newTag = currentLevel === 2 ? "<section>" : "<div>";
      stack.push(startMatch[1]); // Push current tag to stack for tracking
      result.push(newTag);
    }

    result.push(line);
  });

  // Close any remaining opened tags
  while (stack.length > 0) {
    const lastTag = stack.pop();
    result.push(lastTag === "h2" ? "</section>" : "</div>");
  }

  return result.join("\n");
}

// Helper function to get numerical level from tag
function getLevel(tag: string): number {
  return parseInt(tag[1], 10);
}
