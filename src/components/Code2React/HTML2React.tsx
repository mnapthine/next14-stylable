import type React from "react";
import HTML2ReactParser from "react-html-string-parser/HTML2React";
import { components as baseComponents } from "./componentMap";

export interface HTML2ReactProps {
  code: string;
  components?: Record<string, React.ComponentType>;
}
export function HTML2React(props: HTML2ReactProps) {
  const { components, code } = props;

  return (
    <HTML2ReactParser
      html={code}
      components={{ ...baseComponents(), ...components }}
    />
  );
}
