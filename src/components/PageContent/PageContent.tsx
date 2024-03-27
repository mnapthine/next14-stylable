import { Nav } from "@/components/Nav";
// import { st, classes } from "@/theme/main.st.css";
import { st, classes } from "./pageContent.st.css";

interface PageLayoutProps {
  children: React.ReactNode;
  hasTOC?: boolean;
}
export function PageLayout({ children, hasTOC = true }: PageLayoutProps) {
  return (
    <div className={classes.root}>
      <div className={classes.grid}>
        <div className={classes.sideBar}>
          <Nav className={st(classes.nav)} />
        </div>
        <main className={st(classes.main, { hasTOC })}>{children}</main>
      </div>
    </div>
  );
}
