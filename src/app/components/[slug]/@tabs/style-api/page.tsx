import { componentDocs } from "#site/content";
import { notFound } from "next/navigation";
import { HTML2React } from "@/components/Code2React";
import Link from "next/link.js";
import { PageContent } from "@/components/PageContent";
import { H1, P } from "@actionishope/shelley/Text";
import { classes } from "../../../../../styles/mixins.st.css";
import {
  classes as spacing,
  st,
} from "@actionishope/shelley/styles/spacing.st.css";

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const component = componentDocs.find(
    (component) => component.slug === params.slug
  );
  // if (!component) throw new Error(`Styling not found for slug: ${params.slug}`);
  // return { title: `${component.title} styling and theming` };
  return { title: `${component?.title} styling information` };
};

export default function Page(props: { params: { slug: string } }) {
  const { params } = props;
  const component = componentDocs.find(
    (component) => component.slug === params.slug
  );

  if (component == null) notFound();

  return (
    <>
      <PageContent toc={component?.styling?.toc}>
        <H1 weight={5} className={st(spacing.mt1, spacing.mb2)}>
          {component.title} <code style={{ fontSize: "0.7em" }}>styling</code>
        </H1>
        <P className={spacing.mb2}>
          <Link href={`/components/${component.slug}`}>Usage</Link> |{" "}
          <Link href={`/components/${component.slug}/style-api`}>Styling</Link>
        </P>
        <HTML2React code={component?.styling?.content || ""} />
      </PageContent>

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
    </>
  );
}
