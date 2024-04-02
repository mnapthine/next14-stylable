import Link from "next/link";
import { componentDocs } from "#site/content";
import { H2, Text } from "@actionishope/shelley/Text";
import { st, classes } from "./nav.st.css";
import { NestedNavItem } from "@/utils/nestNavItems";

interface NavProps {
  className?: string;
  content?: string;
  pagesNav?: NestedNavItem[];
  componentNav?: boolean;
}

interface CategorisedComponents {
  [category: string]: typeof componentDocs;
}

export function Nav(props: NavProps) {
  // Organise components by category dynamically
  const categorisedComponents: CategorisedComponents = componentDocs.reduce(
    (acc, comp) => {
      if (!acc[comp.category]) {
        acc[comp.category] = [];
      }
      acc[comp.category].push(comp);
      return acc;
    },
    {} as CategorisedComponents // Add index signature to the type of acc
  );

  const renderListItems = (items: NestedNavItem[]) => {
    return items.map((item) => (
      <li key={item.url} className={classes.listItem}>
        <Link href={`${item.url}`} className={classes.anchor}>
          {item.title}
        </Link>
        {item.children && item.children.length > 0 && (
          <ol className={classes.list}>{renderListItems(item.children)}</ol>
        )}
      </li>
    ));
  };

  return (
    <>
      {props.componentNav && (
        <nav className={st(classes.root, props?.className)}>
          {Object.entries(categorisedComponents).map(
            ([category, components]) => (
              <div key={category} className={classes.section}>
                <H2 vol={1} className={classes.title} uppercase>
                  {category}
                </H2>
                {components.map((component, idx) => (
                  <Link key={idx} href={`/components/${component.slug}`}>
                    {component.title}
                  </Link>
                ))}
              </div>
            )
          )}
        </nav>
      )}

      {props.pagesNav && (
        <nav className={st(classes.root, props?.className)}>
          <div className={classes.section}>
            <H2 vol={1} className={classes.title} uppercase>
              Pages
            </H2>
            <ol className={classes.list}>
              <li>
                <Link href={props.pagesNav[0].url}>
                  {props.pagesNav[0].title}
                </Link>
              </li>
              {renderListItems(props.pagesNav[0].children)}
            </ol>
          </div>
        </nav>
      )}
    </>
  );
}
