import type React from "react";
import { forwardRef } from "react";
import HTML2ReactParser from "react-html-string-parser/HTML2React";
import { st, classes } from "./code2React.st.css";
import { components as baseComponents } from "./componentMap";
// import { wrapSections } from "./utils";

export interface HTML2ReactProps extends React.HTMLAttributes<HTMLDivElement> {
  code: string;
  components?: Record<string, React.ComponentType>;
}
function HTML2React(props: HTML2ReactProps, ref: React.Ref<HTMLDivElement>) {
  const { components, code, className, ...rest } = props;

  return (
    <div className={st(classes.root, className)} ref={ref} {...rest}>
      <HTML2ReactParser
        html={code}
        // html={wrapSections(code)}
        components={{ ...baseComponents, ...components }}
      />
    </div>
  );
}

/**
 * HTML2React
 */
const _HTML2React = forwardRef(HTML2React);
export { _HTML2React as HTML2React };
