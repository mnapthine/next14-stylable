import { slug } from "github-slugger";
import GithubSlugger from "github-slugger";

import { ReactNode } from "react";

export const isExternalLink = (url: string): boolean =>
  /^(http:\/\/|https:\/\/)/.test(url);

export const slugFromNode = (children?: ReactNode) => {
  const slugger = new GithubSlugger();
  return children ? slugger.slug(children.toString()) : undefined;
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
  const slugger = new GithubSlugger();
  const sectionedHtml = [];
  const lines = html.split("\n");
  let inSection = false;

  lines.forEach((line) => {
    const headingMatch = line.match(/<(h[2345])>(.*?)<\/\1>/); // Match the heading and capture its content
    if (headingMatch) {
      if (inSection) {
        sectionedHtml.push("</div>"); // Close previous div if in section
      }
      const headingContent = headingMatch[2].trim();
      const id = slugger.slug(headingContent); // Generate an ID from heading content
      sectionedHtml.push(`<div id="${id}">`); // Use generated ID in the div
      sectionedHtml.push(line);
      inSection = true;
    } else {
      if (line.match(/<\/h[2345]>/) && inSection) {
        sectionedHtml.push(line);
        sectionedHtml.push("</div>"); // Close div on heading close
        inSection = false;
      } else if (inSection) {
        sectionedHtml.push(line);
      }
    }
  });

  if (inSection) {
    sectionedHtml.push("</div>"); // Ensure closing div if still open
  }

  return sectionedHtml.join("\n");
}
