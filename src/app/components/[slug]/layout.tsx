import type { ReactNode } from "react";
import Link from "next/link.js";
// import { Tab, TabList, TabPanel, Tabs } from "./tabs.jsx";
// app/[slug]/page.tsx
import { H1, P } from "@actionishope/shelley/Text";
// import { st, classes } from "@/app/theme/main.st.css";
import { classes } from "../../../styles/main.st.css";
// import { MDXContent } from "../../components/MDXContent";

import { componentDocs } from "#site/content";

export const generateStaticParams = async () =>
  componentDocs.map((component) => ({
    slug: component.slug,
  }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
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
    <>
      <div>
        <H1>{component.title}</H1>

        <P>{component.description}</P>
        {/* <MDXContent content={component.description?.code || ""} vol={{ p: 3 }} /> */}

        <P>
          <Link href={`/components/${component.slug}`}>Usage</Link> |{" "}
          <Link href={`/components/${component.slug}/styling`}>Styling</Link>
        </P>
        <div className="wrapper">{props.tabs}</div>

        <p>
          Check out the{" "}
          <Link href="/previews/tab-next-router" className="link">
            trending posts
          </Link>{" "}
          or stay up to date with the{" "}
          <Link href="/previews/tab-next-router/new" className="link">
            latest posts
          </Link>
        </p>
      </div>
      <div>TOC</div>
    </>
  );
}
