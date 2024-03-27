import { Nav } from "@/components/Nav";
// import { st, classes } from "@/theme/main.st.css";
import { st, classes } from "./pageContent.st.css";

interface PageContentProps {
  children: React.ReactNode;
  hasTOC?: boolean;
}
export function PageContent({ children, hasTOC = true }: PageContentProps) {
  return (
    <div className={st(classes.root)}>
      <div className={classes.grid}>
        <div className={classes.sideBar}>
          {/* <Nav className={st(classes.nav)} /> */}
        </div>
        {/* <main className={st(classes.main, { hasTOC })}>{children}</main> */}
      </div>
    </div>
  );
}
