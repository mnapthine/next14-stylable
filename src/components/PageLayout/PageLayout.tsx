import { Nav } from "@/components/Nav";
import { st, classes } from "./pageLayout.st.css";

interface PageLayoutProps {
  children: React.ReactNode;
  hasTOC?: boolean;
}
export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className={classes.root}>
      <div className={classes.grid}>
        <div className={classes.sideBar}>
          <Nav className={st(classes.nav)} />
        </div>
        {children}
      </div>
    </div>
  );
}
