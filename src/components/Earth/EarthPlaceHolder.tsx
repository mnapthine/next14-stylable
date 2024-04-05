import { classes, st } from "./earth.st.css";
import Image from "next/image";

interface EarthPlaceHolderProps {
  className?: string;
  content?: string;
}

export function EarthPlaceHolder(props: EarthPlaceHolderProps) {
  return (
    <div className={st(classes.root)}>
      <Image
        alt=""
        src="/assets/fallback.png"
        width={1119}
        height={349}
        className={classes.fallbackImage}
      />
    </div>
  );
}
