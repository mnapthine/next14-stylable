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
import { ReactElement, HTMLProps } from "react";
import Link from "next/link";
import { RiShareBoxLine } from "react-icons/ri";
import { VisuallyHidden } from "@actionishope/shelley/VisuallyHidden";
import { isExternalLink, parseClassnameAndOptions } from "./utils";

export const components = () => {
  return {
    h1: H1,
    h2: (props: Partial<TextProps>) => <H2 vol={5} weight={6} {...props} />,
    h3: (props: Partial<TextProps>) => <H3 vol={4} weight={6} {...props} />,
    h4: (props: Partial<TextProps>) => <H4 vol={3} weight={6} {...props} />,
    h5: (props: Partial<TextProps>) => <H5 vol={3} weight={6} {...props} />,
    h6: H6,
    p: P,
    a: (props: HTMLProps<HTMLAnchorElement>) => {
      const { href = "" } = props;
      return (
        <Link href={href} target={isExternalLink(href) ? "_blank" : undefined}>
          {props.children}
          {isExternalLink(href) && (
            <>
              <RiShareBoxLine aria-hidden />
              <VisuallyHidden>(Opens in a new window)</VisuallyHidden>
            </>
          )}
        </Link>
      );
    },
    ul: (props: Partial<TextProps>) => <Text elementType="ul" {...props} />,
    ol: (props: Partial<TextProps>) => <Text elementType="ol" {...props} />,
    span: (props: Partial<TextProps>) => <Text elementType="span" {...props} />,
    pre: (props: HTMLProps<HTMLPreElement> | { children: ReactElement }) => {
      const children = props.children;
      const isMDX = (children as ReactElement)?.props;
      const codeRaw = isMDX
        ? (children as ReactElement).props.children
        : (children as any)[0].props.children;
      const classNameProp = isMDX
        ? (children as ReactElement).props.className
        : (children as any)[0].props.class;
      // Converts certain HTML entities to their respective characters.
      const code: string = isMDX
        ? (codeRaw as string)
        : (codeRaw as string[])[0]
            .replace(/&#x3C;/g, "<")
            .replace(/&#x26;/g, "&");
      const { className, options } = parseClassnameAndOptions(
        classNameProp || ""
      );
      const codeBlock = (
        <CodeBlock language={className?.split("-")[1]} code={code} />
      );
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
  };
};
