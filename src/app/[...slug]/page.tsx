import { notFound } from "next/navigation";
import { pages } from "#site/content";
import { MDX2React } from "@/components/Code2React";
import { PageLayout } from "@/components/PageLayout";
import { PageContent } from "@/components/PageContent";
import { nestNavItems, NavItem } from "@/utils/nestNavItems";
import { classes } from "../../styles/mixins.st.css";
import {
  classes as spacing,
  st,
} from "@actionishope/shelley/styles/spacing.st.css";
import { H1 } from "@actionishope/shelley/Text";
function getPageBySlug(slug: string) {
  return pages.find((page) => page.slug === slug);
}

function getNav(path: string[]) {
  let nav: NavItem[] = [];
  path.forEach((slug) => {
    pages.map((page): void => {
      page.urlPath.includes(slug) || page.slug === slug
        ? nav.push({
            title: page.title,
            url:
              page.urlPath !== "/"
                ? `/${page.urlPath}/${page.slug}`
                : `/${page.slug}`,
            weight: page.weight,
            menuTitle: page?.menuTitle || false,
          })
        : null;
    });

    const page = pages.filter(
      (page) => page.urlPath.includes(slug) || page.slug === slug
    );
  });
  return nav;
}

interface MetadataParams {
  params: {
    slug: string[];
  };
}

export const generateMetadata = ({ params }: MetadataParams) => {
  // Assuming `pages` is defined elsewhere and accessible in this context
  const page = pages.find((page) => page.slug === params.slug[0]);

  if (!page) return notFound(); // Ensure `notFound` is properly handled in this context

  return {
    title: page.title,
    description: page.description || "",
  };
};

export const generateStaticParams = async () =>
  pages.map((page) => {
    let urlPath = page.urlPath === "/" ? [] : page.urlPath.split("/");
    urlPath.push(page.slug);
    return {
      slug: urlPath,
    };
  });

export default function Page(props: { params: { slug: string[] } }) {
  const { params } = props;

  const page = getPageBySlug(params.slug[params.slug.length - 1]);
  if (page == null) notFound();
  const nav = getNav(params.slug);
  return (
    <PageLayout pagesNav={nestNavItems(nav)}>
      <PageContent toc={page.toc}>
        <H1 weight={5} className={st(spacing.mt1, spacing.mb2)}>
          {page?.menuTitle || page.title}
        </H1>
        <MDX2React code={page.body} className={classes.format} />
      </PageContent>
    </PageLayout>
  );
}
