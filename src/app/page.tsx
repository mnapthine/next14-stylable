import { PageLayout } from "@/components/PageLayout";
import { ShelleyBanner } from "@/components/ShelleyBanner";
import { H1, P, Text } from "@actionishope/shelley/Text";
import { PageContent } from "@/components/PageContent";
import dynamic from "next/dynamic";

const Earth = dynamic(() => import("@/components/Earth/Earth"), {
  ssr: false,
  loading: () => <img alt="" src="assets/fallback.png" />,
});

export default function Home() {
  return (
    <>
      <PageLayout>
        <div style={{ display: "grid" }}>
          <ShelleyBanner />
          <PageContent>
            <Earth />
            <P>
              Shelley UI is a simple, modular and accessible component library
              that gives you the building blocks you need to build your React
              applications.
            </P>
          </PageContent>
        </div>
      </PageLayout>
    </>
  );
}
