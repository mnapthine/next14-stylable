import { H2, P } from "@actionishope/shelley/Text";
import Image from "next/image";
import dynamic from "next/dynamic";
import { classes, st } from "./earthBanner.st.css";

const Earth = dynamic(() => import("@/components/Earth/Earth"), {
  ssr: false,
  loading: () => (
    <Image
      alt=""
      src="/assets/fallback.png"
      width={1119}
      height={349}
      className={classes.fallbackImage}
    />
  ),
});

interface EarthBannerProps {
  className?: string;
  content?: string;
}

export function EarthBanner(props: EarthBannerProps) {
  return (
    <div className={st(classes.root)}>
      <div className={classes.inner}>
        <Earth className={classes.earth} />
        <div className={classes.treeware}>
          <H2 vol={1} uppercase className={classes.header}>
            <a href="https://treeware.earth">Treeware</a>&nbsp;-&nbsp;
          </H2>
          <P vol={1}>If you use for free then buy the World a tree.</P>
        </div>
      </div>
    </div>
  );
}
