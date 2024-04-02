import * as runtime from "react/jsx-runtime";
import Image from "next/image";
import { H1, H2, H3, H4, H5, H6, P, Text } from "@actionishope/shelley/Text";
import Link from "next/link";
import { slug } from "github-slugger";
import { CodeBlock } from "../CodeBlock";
import { ReactElement, ReactNode, HTMLProps } from "react";
import { ReactLiveBlock } from "../ReactLiveBlock";

interface MdxProps {
  code: string;
  components?: Record<string, React.ComponentType>;
}

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const slugFromNode = (children?: ReactNode) => {
  return children ? slug(children.toString()) : undefined;
};

function parseClassnameAndOptions(inputStr: string): {
  className?: string;
  options: { live?: boolean; preview?: boolean };
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

type ComponentProps = { children: ReactElement };

export function MDXContent({ code, components }: MdxProps) {
  const Component = useMDXComponent(code);
  const mdxComponents = {
    // Override the default <a> element to use the next/link component.
    a: ({ href, children }: { href: string; children: ReactElement }) => (
      <Link href={href}>{children}</Link>
    ),
    h1: ({ children }: ComponentProps) => (
      <H1 id={slugFromNode(children)}>{children}</H1>
    ),
    h2: ({ children }: ComponentProps) => (
      <H2 id={slugFromNode(children)} vol={5}>
        {children}
      </H2>
    ),
    h3: ({ children }: ComponentProps) => (
      <H3 id={slugFromNode(children)}>{children}</H3>
    ),
    h4: ({ children }: ComponentProps) => (
      <H4 id={slugFromNode(children)}>{children}</H4>
    ),
    h5: ({ children }: ComponentProps) => (
      <H5 id={slugFromNode(children)}>{children}</H5>
    ),
    h6: ({ children }: ComponentProps) => (
      <H6 id={slugFromNode(children)}>{children}</H6>
    ),
    ul: ({ children }: ComponentProps) => (
      <Text elementType="ul">{children}</Text>
    ),
    p: ({ children }: ComponentProps) => <P vol={3}>{children}</P>,
    pre: ({ children }: ComponentProps) => {
      const { children: code, className: classNameProp = "" } = children.props;
      const { className, options } = parseClassnameAndOptions(classNameProp);
      const codeBlock = (
        <CodeBlock language={className?.split("-")[1]} code={code} />
      );
      return options ? (
        <>
          <ReactLiveBlock editable={options.live} rawCode={code} />
          {options.live === false && codeBlock}
        </>
      ) : (
        codeBlock
      );
    },
    // Add a custom component.
    MyComponent: ({ children }: HTMLProps<HTMLElement>) => (
      <div>{children}</div>
    ),
  };
  return <Component components={{ Image, ...components, ...mdxComponents }} />;
}
