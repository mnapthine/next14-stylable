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
