import { PageLayout } from "@/components/PageLayout";
import { ShelleyBanner } from "@/components/ShelleyBanner";
import { P } from "@actionishope/shelley/Text";
import { PageContent } from "@/components/PageContent";
export default function Home() {
  return (
    <PageLayout>
      <div style={{ display: "grid" }}>
        <ShelleyBanner />
        <PageContent>
          <P>
            Shelley UI is a simple, modular and accessible component library
            that gives you the building blocks you need to build your React
            applications.
          </P>
        </PageContent>
      </div>
    </PageLayout>
  );
}
