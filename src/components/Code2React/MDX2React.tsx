import * as runtime from "react/jsx-runtime";
import Image from "next/image";
import { components as baseComponents } from "./componentMap";
import { st, classes } from "./code2React.st.css";
import { forwardRef } from "react";
interface MDX2ReactProps extends React.HTMLAttributes<HTMLDivElement> {
  code: string;
  components?: Record<string, React.ComponentType>;
}

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

function MDX2React(props: MDX2ReactProps, ref: React.Ref<HTMLDivElement>) {
  const { code, className, components, ...rest } = props;
  const Component = useMDXComponent(code);
  const mdxComponents = {
    // Add a custom component.
    // MyComponent: ({ children }: HTMLProps<HTMLElement>) => (
    //   <div>{children}</div>
    // ),
  };
  return (
    <div className={st(classes.root, className)} ref={ref} {...rest}>
      <Component
        components={{
          Image,
          ...baseComponents(),
          ...mdxComponents,
          ...components,
        }}
      />
    </div>
  );
}

/**
 * MDX2React
 */
const _MDX2React = forwardRef(MDX2React);
export { _MDX2React as MDX2React };
