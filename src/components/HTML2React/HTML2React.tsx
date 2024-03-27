import type React from "react";
import { forwardRef, type ReactNode } from "react";
import HTML2ReactParser from "react-html-string-parser/HTML2React";
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
  Text,
  TextProps,
} from "@actionishope/shelley/Text";
import { ReactLiveBlock } from "../ReactLiveBlock";
import { CodeBlock } from "../CodeBlock";
import { st, classes } from "./html2React.st.css";

export interface HTML2ReactProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  dangerouslySetInnerHTML?: { __html: string };
}

type ComponentProps = { children: React.ReactElement };

function parseClassnameAndOptions(inputStr: string): {
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

function HTML2React(props: HTML2ReactProps, ref: React.Ref<HTMLDivElement>) {
  const { children, dangerouslySetInnerHTML, className, ...rest } = props;

  return (
    <div className={st(classes.root, className)} ref={ref} {...rest}>
      {dangerouslySetInnerHTML ? (
        <HTML2ReactParser
          html={dangerouslySetInnerHTML.__html}
          components={{
            h1: H1,
            h2: H2,
            h3: H3,
            h4: H4,
            h5: H5,
            h6: H6,
            p: P,
            ul: (props: Partial<TextProps>) => (
              <Text elementType="ul" {...props} />
            ),
            ol: (props: Partial<TextProps>) => (
              <Text elementType="ol" {...props} />
            ),
            span: (props: Partial<TextProps>) => (
              <Text elementType="span" {...props} />
            ),
            pre: ({ children }) => {
              // console.log("pre children", props.children[0].props.class);
              // console.log("pre children", children[0]);
              const { children: codeRaw, class: classNameProp = "" } =
                children[0].props;
              // replace the encoded < with the actual character
              const code = codeRaw[0].replace(/&#x3C;/g, "<");
              const { className, options } =
                parseClassnameAndOptions(classNameProp);
              const codeBlock = (
                <CodeBlock language={className?.split("-")[1]} code={code} />
              );

              console.log(options);
              return options ? (
                <>
                  <ReactLiveBlock
                    editable={options.live}
                    rawCode={code}
                    twoColumn={options.twoCol}
                  />
                  {options.live === false && codeBlock}
                </>
              ) : (
                codeBlock
              );
            },
          }}
        />
      ) : (
        // Otherwise, just render the children as-is
        // Note: when above elements passed in as children currently there is no styling associated with them.
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
