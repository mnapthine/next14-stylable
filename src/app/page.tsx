import { ShelleyBanner } from "@/components/ShelleyBanner";
import { EarthPlaceHolder } from "@/components/Earth";
import dynamic from "next/dynamic";

const Earth = dynamic(() => import("@/components/Earth/Earth"), {
  ssr: false,
  loading: () => <EarthPlaceHolder />,
});

export default function Home() {
  return (
    <div style={{ display: "grid" }}>
      <ShelleyBanner />
      {/* <EarthPlaceHolder /> */}
      <Earth />
    </div>
  );
}
