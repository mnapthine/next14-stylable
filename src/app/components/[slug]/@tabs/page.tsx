import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { componentDocs } from "#site/content";
import { PageContent } from "@/components/PageContent";
import { H1, P } from "@actionishope/shelley/Text";
import { HTML2React } from "@/components/Code2React";
import Link from "next/link.js";
import {
  classes as spacing,
  st,
} from "@actionishope/shelley/styles/spacing.st.css";
import { classes } from "../../../../styles/mixins.st.css";

type MetaDataType = {
  params: { slug: string };
};

export const generateMetadata = ({ params }: MetaDataType) => {
  const component = componentDocs.find(
    (component) => component.slug === params.slug
  );
  if (!component) throw new Error(`Post not found for slug: ${params.slug}`);
  return {
    title: component.title,
    description: component.description || "",
  };
};

export default function Page(props: { params: { slug: string } }) {
  const { params } = props;

  const component = componentDocs.find(
    (component) => component.slug === params.slug
  );

  if (component == null) notFound();

  return (
    <PageContent toc={component.toc}>
      <H1 weight={5} className={st(spacing.mt1, spacing.mb2)}>
        {component.title}
      </H1>

      <P className={spacing.mb2}>
        <Link href={`/components/${component.slug}`}>Usage</Link> |{" "}
        <Link href={`/components/${component.slug}/style-api`}>Styling</Link>
      </P>

      <P className={spacing.mb2}>{component.description}</P>

      <HTML2React
        className={classes.format}
        dangerouslySetInnerHTML={{ __html: component.content }}
      />
    </PageContent>
  );
}
