"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { componentDocs } from "#site/content";
import { H2 } from "@actionishope/shelley/Text";
import { st, classes } from "./nav.st.css";
import { organiseItemsByCategory } from "@/utils/organiseItemsByCategory";

export interface NavItem {
  title: string;
  url: string;
  menuTitle?: string | false; // Optional title for the menu
  weight: number; // Added to specify the order of navigation items
  category: string; // Added to specify the category of navigation items
}

interface NavProps {
  className?: string;
  content?: string;
  pagesNav?: NavItem[];
  componentNav?: boolean;
}

export function Nav(props: NavProps) {
  const pathname = usePathname();
  // const pathname = "components";
  const { pagesNav, componentNav, className } = props;
  // Organise components by category
  const categorisedComponents = organiseItemsByCategory(componentDocs);
  // Organise pages by category
  const categorisedPages = pagesNav && organiseItemsByCategory(pagesNav);

  return (
    <>
      {componentNav && (
        <nav
          className={st(classes.root, className)}
          aria-label="Components Navigation"
        >
          {Object.entries(categorisedComponents).map(
            ([category, components]) => (
              <div key={category} className={classes.section}>
                <H2 vol={1} className={classes.title} uppercase>
                  {category}
                </H2>
                {components.map((component, idx) => {
                  const pageURL = `/components/${component.slug}`;
                  return (
                    <Link
                      key={idx}
                      // className={classes.anchor}
                      className={st(classes.anchor, {
                        isActive: pageURL === pathname,
                        isActivePath:
                          Boolean(pathname.includes(`${pageURL}/`)) &&
                          pageURL !== "/",
                      })}
                      href={pageURL}
                    >
                      {component.title}
                    </Link>
                  );
                })}
              </div>
            )
          )}
        </nav>
      )}

      {pagesNav && (
        <nav
          className={st(classes.root, className)}
          aria-label="Section Navigation"
        >
          {categorisedPages &&
            Object.entries(categorisedPages).map(([category, pages]) => (
              <div key={category} className={classes.section}>
                {category !== "" && (
                  <H2 vol={1} className={classes.title} uppercase>
                    {category}
                  </H2>
                )}
                {pages.map((page, idx) => (
                  <Link
                    key={idx}
                    className={st(classes.anchor, {
                      isActive: page.url === pathname,
                      isActivePath:
                        Boolean(pathname.includes(page.url)) &&
                        page.url !== "/",
                    })}
                    href={page.url}
                  >
                    {page.menuTitle || page.title}
                  </Link>
                ))}
              </div>
            ))}
        </nav>
      )}
    </>
  );
}
