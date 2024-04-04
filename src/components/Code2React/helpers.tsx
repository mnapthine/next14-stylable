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
import { slug } from "github-slugger";
import { ReactNode, ReactElement, HTMLProps } from "react";
import Link from "next/link";
import { RiShareBoxLine } from "react-icons/ri";
import { VisuallyHidden } from "@actionishope/shelley/VisuallyHidden";

const isExternalLink = (url: string): boolean =>
  /^(http:\/\/|https:\/\/)/.test(url);

const slugFromNode = (children?: ReactNode) => {
  return children ? slug(children.toString()) : undefined;
};

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

export const components = {
  h1: H1,
  h2: (props: Partial<TextProps>) => (
    <H2 vol={5} weight={6} id={slugFromNode(props.children)} {...props} />
  ),
  h3: (props: Partial<TextProps>) => (
    <H3 vol={4} weight={6} id={slugFromNode(props.children)} {...props} />
  ),
  h4: (props: Partial<TextProps>) => (
    <H4 vol={3} weight={6} id={slugFromNode(props.children)} {...props} />
  ),
  h5: (props: Partial<TextProps>) => (
    <H5 vol={3} weight={6} id={slugFromNode(props.children)} {...props} />
  ),
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

    const code = isMDX ? codeRaw : codeRaw[0].replace(/&#x3C;/g, "<");
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
