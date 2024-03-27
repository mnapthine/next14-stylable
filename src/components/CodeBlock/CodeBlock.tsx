"use client";
import { Highlight, themes } from "prism-react-renderer";
import { st, classes } from "./codeBlock.st.css";
import { Text } from "@actionishope/shelley/Text";
export function CodeBlock({
  code,
  language = "tsx",
  lineNumbers = false,
}: {
  code: string;
  language?: string;
  lineNumbers?: boolean;
}) {
  return (
    <Text elementType="div" vol={1}>
      <Highlight theme={themes.nightOwl} code={code.trim()} language={language}>
        {({ className, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={st(
              classes.root,
              {
                hasLineNumbers: lineNumbers,
              },
              className
            )}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {lineNumbers && (
                  <span className={classes.lineNumber}>{i + 1}</span>
                )}
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </Text>
  );
}
