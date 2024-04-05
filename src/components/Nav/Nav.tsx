import Link from "next/link";
import { componentDocs } from "#site/content";
import { H2 } from "@actionishope/shelley/Text";
import { st, classes } from "./nav.st.css";

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

function organiseItemsByCategory<
  T extends { category?: string; weight: number }
>(items: T[]): { [category: string]: T[] } {
  const grouped = items.reduce((acc: { [key: string]: T[] }, item: T) => {
    const category: string = item.category || "";
    acc[category] = acc[category] || [];
    acc[category].push(item);
    return acc;
  }, {});

  Object.keys(grouped).forEach((category: string) => {
    grouped[category].sort((a: T, b: T) => a.weight - b.weight);
  });

  return grouped;
}

export function Nav(props: NavProps) {
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
                {components.map((component, idx) => (
                  <Link
                    key={idx}
                    className={classes.anchor}
                    href={`/components/${component.slug}`}
                  >
                    {component.title}
                  </Link>
                ))}
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
                <H2 vol={1} className={classes.title} uppercase>
                  {category === "" ? pages[0].title : category}
                </H2>
                {pages.map((page, idx) => (
                  <Link key={idx} className={classes.anchor} href={page.url}>
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
