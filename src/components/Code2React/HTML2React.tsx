import type React from "react";
import { forwardRef, type ReactNode } from "react";
import HTML2ReactParser from "react-html-string-parser/HTML2React";
import { st, classes } from "./code2React.st.css";
import { components } from "./helpers";

export interface HTML2ReactProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  dangerouslySetInnerHTML?: { __html: string };
}
function HTML2React(props: HTML2ReactProps, ref: React.Ref<HTMLDivElement>) {
  const { children, dangerouslySetInnerHTML, className, ...rest } = props;

  return (
    <div className={st(classes.root, className)} ref={ref} {...rest}>
      {dangerouslySetInnerHTML ? (
        <HTML2ReactParser
          html={dangerouslySetInnerHTML.__html}
          components={components}
        />
      ) : (
        // Otherwise, just render the children as-is
        children
      )}
    </div>
  );
}

/**
 * HTML2React
 */
const _HTML2React = forwardRef(HTML2React);
export { _HTML2React as HTML2React };
