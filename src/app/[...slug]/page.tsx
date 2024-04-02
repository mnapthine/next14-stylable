import { notFound } from "next/navigation";
import { pages } from "#site/content";
import { MDXContent } from "@/components/MDXContent";
import { PageLayout } from "@/components/PageLayout";
import { PageContent } from "@/components/PageContent";
import { nestNavItems } from "@/utils/nestNavItems";
import { ReactNode } from "react";

function getPageBySlug(slug: string) {
  return pages.find((page) => page.slug === slug);
}

function getNav(path: string[]) {
  let nav: { title: string; url: string; weight: number }[] = [];
  path.forEach((slug) => {
    pages.map((page): void => {
      console.log("SLUG", page.urlPath);
      page.urlPath.includes(slug) || page.slug === slug
        ? nav.push({
            title: page.title,
            url:
              page.urlPath !== "/"
                ? `/${page.urlPath}/${page.slug}`
                : `/${page.slug}`,
            weight: page.weight,
          })
        : null;
    });

    const page = pages.filter(
      (page) => page.urlPath.includes(slug) || page.slug === slug
    );
    //   (page) => page.urlPath.includes(slug[0]) || page.slug === slug[0]
    // );
    // console.log("PAGE", page);
    // const page = getPageBySlug(slug);
    // page && nav.push({ title: page.title, url: page.urlPath });
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
        <MDXContent code={page.body} />
      </PageContent>
    </PageLayout>
  );
}
