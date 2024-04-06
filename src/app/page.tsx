import { ShelleyBanner } from "@/components/ShelleyBanner";
import { EarthBanner } from "@/components/Earth";

export default function Home() {
  return (
    <div style={{ display: "grid" }}>
      <ShelleyBanner />
      <EarthBanner />
    </div>
  );
}
