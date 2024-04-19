import * as runtime from "react/jsx-runtime";
import Image from "next/image";
import { components as baseComponents } from "./componentMap";
interface MDX2ReactProps {
  code: string;
  components?: Record<string, React.ComponentType>;
}

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

export function MDX2React(props: MDX2ReactProps) {
  const { code, components } = props;
  const Component = useMDXComponent(code);
  const mdxComponents = {
    // Add a custom component.
    // MyComponent: ({ children }: HTMLProps<HTMLElement>) => (
    //   <div>{children}</div>
    // ),
  };
  return (
    <Component
      components={{
        Image,
        ...baseComponents(),
        ...mdxComponents,
        ...components,
      }}
    />
  );
}
