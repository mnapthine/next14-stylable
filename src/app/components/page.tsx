import { PageContent } from "@/components/PageContent";
import { H1, P } from "@actionishope/shelley/Text";
import {
  st,
  classes as spacing,
} from "@actionishope/shelley/styles/spacing.st.css";
export default function Page() {
  return (
    <PageContent>
      <H1 className={st(spacing.mt1, spacing.mb2)} vol={8} weight={5}>
        Componets
      </H1>
      <P>
        Shelley aims to provide building blocks for developers to create great
        user interfaces with full control over the CSS to cater to your design
        system.
      </P>
    </PageContent>
  );
}
