import { notFound } from "next/navigation";
import { pages } from "#site/content";
import { MDX2React } from "@/components/Code2React";
import { PageLayout } from "@/components/PageLayout";
import { PageContent } from "@/components/PageContent";
import { classes as mixins } from "../../styles/mixins.st.css";
import { H1 } from "@actionishope/shelley/Text";
import { NavItem } from "@/components/Nav";

function getPageBySlug(slug: string) {
  return pages.find((page) => page.slug === slug);
}

function getNavItemsFromURLPath(path: string[]): NavItem[] {
  let navItems: NavItem[] = [];

  path.forEach((part) => {
    pages.forEach((page) => {
      // CHeck if page is related to the current path
      if (page.urlPath.includes(part) || page.slug === part) {
        // Construct the URL for the nav item
        const url =
          page.urlPath !== "/"
            ? `/${page.urlPath}/${page.slug}`
            : `/${page.slug}`;

        // Check if the item already exists in the navItems array to avoid duplicates
        if (!navItems.some((item) => item.url === url)) {
          navItems.push({
            title: page.title,
            url: url,
            weight: page.weight,
            menuTitle: page.menuTitle || false,
            category: page.category || "",
          });
        }
      }
    });
  });

  return navItems;
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
  const nav = getNavItemsFromURLPath(params.slug);

  return (
    <PageLayout pagesNav={nav}>
      <PageContent toc={page.toc}>
        <H1 weight={5} className={mixins.pageTitle}>
          {page?.menuTitle ? page.menuTitle : page.title}
          {/* {page?.menuTitle && <span>{page.menuTitle}</span>} */}
        </H1>
        <MDX2React code={page.body} />
      </PageContent>
    </PageLayout>
  );
}
