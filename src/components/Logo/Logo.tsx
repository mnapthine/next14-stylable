import type React from "react";
import { st, classes } from "./logo.st.css";

export const Logo = ({
  className: classNameProp,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={st(classes.root, classNameProp)} {...rest}>
      <span className={classes.logoInner}></span>
    </div>
  );
};
