import { PageContent } from "@/components/PageContent";
import { H1, H2, P, Text } from "@actionishope/shelley/Text";
import { classes as mixins } from "../../styles/mixins.st.css";
import { componentDocs } from "#site/content";
import { organiseItemsByCategory } from "@/utils/organiseItemsByCategory";
import Link from "next/link";

export default function Page() {
  const categorisedComponents = organiseItemsByCategory(componentDocs);

  return (
    <PageContent>
      <H1 className={mixins.pageTitle} vol={8} weight={5}>
        Componets
      </H1>
      <P>
        Shelley aims to provide building blocks for developers to create great
        user interfaces with full control over the CSS to cater to your design
        system.
      </P>
      {Object.entries(categorisedComponents).map(([category, components]) => (
        <div
          key={category}
          // className={classes.section}
        >
          <H2
            vol={1}
            // className={classes.title}
            uppercase
          >
            {category}
          </H2>
          <Text elementType="ul">
            {components.map((component, idx) => {
              const pageURL = `/components/${component.slug}`;
              return (
                <li key={pageURL}>
                  <Link
                    // className={classes.anchor}
                    // className={st(classes.anchor)}
                    href={pageURL}
                  >
                    {component.title}
                  </Link>
                </li>
              );
            })}
          </Text>
        </div>
      ))}
    </PageContent>
  );
}
