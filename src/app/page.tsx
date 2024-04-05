import Image from "next/image";
import { PageLayout } from "@/components/PageLayout";
import { ShelleyBanner } from "@/components/ShelleyBanner";
import { H1, P, Text } from "@actionishope/shelley/Text";
import { PageContent } from "@/components/PageContent";
import { Earth } from "@/components/Earth";
import dynamic from "next/dynamic";

// const Earth = dynamic(() => import("@/components/Earth"), {
//   ssr: false,
//   loading: () => <img src="/next.svg"></img>,
// });

export default function Home() {
  return (
    <>
      <Earth />
      <PageLayout>
        <div style={{ display: "grid" }}>
          <ShelleyBanner />
          <PageContent>
            <P>
              Shelley UI is a simple, modular and accessible component library
              that gives you the building blocks you need to build your React
              applications.
            </P>
            {/* <Earth /> */}
          </PageContent>
        </div>
      </PageLayout>
    </>
  );
}
