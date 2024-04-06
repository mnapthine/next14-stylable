import { ShelleyBanner } from "@/components/ShelleyBanner";
import { EarthBanner } from "@/components/Earth";
import { classes as mixins } from "../styles/mixins.st.css";
export default function Home() {
  return (
    <div className={mixins.snapScrollY} style={{ display: "grid" }}>
      <ShelleyBanner />
      <div className={mixins.snapSection} />
      <EarthBanner />
      <ShelleyBanner />
    </div>
  );
}
