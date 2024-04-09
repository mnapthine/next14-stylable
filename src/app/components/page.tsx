import { PageContent } from "@/components/PageContent";
import { H1, P, Text } from "@actionishope/shelley/Text";
import { classes as mixins } from "../../styles/mixins.st.css";
export default function Page() {
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

      <Text elementType="ul">
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>

        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
      </Text>
    </PageContent>
  );
}
