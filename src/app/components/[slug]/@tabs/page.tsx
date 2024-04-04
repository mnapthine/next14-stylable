import { notFound } from "next/navigation";
import { componentDocs } from "#site/content";
// import { Sandpack } from "@codesandbox/sandpack-react";

import { HTML2React } from "@/components/Code2React";
import { classes } from "../../../../styles/mixins.st.css";

function getComponentBySlug(slug: string) {
  return componentDocs.find((component) => component.slug === slug);
}

export default function Page(props: { params: { slug: string } }) {
  const { params } = props;

  // console.log(getTableOfContents(component?.body.raw));

  const component = getComponentBySlug(params.slug);
  if (component == null) notFound();

  return (
    <>
      {/* <Sandpack
        files={{
          "/Wrapper.js": `export default () => return "";`,

          "/Button.js": {
            code: `export default () => {
  return <button>Hello</button>
};`,
            // readOnly: true, // Set as non-editable, defaults to `false`
            // active: true, // Set as main file, defaults to `false`
            // hidden: false, // Tab visibility, defaults to `false`
          },
        }}
        template="react"
      /> */}
      <HTML2React
        className={classes.format}
        dangerouslySetInnerHTML={{ __html: component.content }}
      />
    </>
  );
}
