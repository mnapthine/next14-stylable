import type { ReactNode } from "react";
import Link from "next/link.js";
import { PageContent } from "@/components/PageContent";
import { H1, P } from "@actionishope/shelley/Text";
import {
  classes as spacing,
  st,
} from "@actionishope/shelley/styles/spacing.st.css";
// import { Tab, TabList, TabPanel, Tabs } from "./tabs.jsx";

import { componentDocs } from "#site/content";

export const generateStaticParams = async () =>
  componentDocs.map((component) => ({
    slug: component.slug,
  }));

export const generateMetadata = ({
  params,
}: {
  tabs: ReactNode;
  children: ReactNode;
  params: { slug: string };
}) => {
  const component = componentDocs.find(
    (component) => component.slug === params.slug
  );
  if (!component) throw new Error(`Post not found for slug: ${params.slug}`);
  return {
    title: component.title,
    description: component.description || "",
  };
};

export default function Layout(props: {
  tabs: ReactNode;
  children: ReactNode;
  params: { slug: string };
}) {
  const { params } = props;
  const component = componentDocs.find(
    (component) => component.slug === params.slug
  );
  if (!component) throw new Error(`Post not found for slug: ${params.slug}`);

  return (
    <PageContent toc={component.toc}>
      <H1 weight={5} className={st(spacing.mt1, spacing.mb2)}>
        {component.title}
      </H1>
      <P className={spacing.mb2}>{component.description}</P>
      <P className={spacing.mb2}>
        <Link href={`/components/${component.slug}`}>Usage</Link> |{" "}
        <Link href={`/components/${component.slug}/styling`}>Styling</Link>
      </P>

      {props.tabs}

      {/* <p>
        Check out the{" "}
        <Link href="/previews/tab-next-router" className="link">
          trending posts
        </Link>{" "}
        or stay up to date with the{" "}
        <Link href="/previews/tab-next-router/new" className="link">
          latest posts
        </Link>
      </p> */}
    </PageContent>
  );
}
