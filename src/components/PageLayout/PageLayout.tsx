import { Nav } from "@/components/Nav";
import { st, classes } from "./pageLayout.st.css";
import { MainNav } from "@/components/MainNav";
import { NestedNavItem } from "@/utils/nestNavItems";

interface PageLayoutProps {
  children: React.ReactNode;
  pagesNav?: NestedNavItem[];
  componentNav?: boolean;
}
export function PageLayout({
  children,
  pagesNav,
  componentNav,
}: PageLayoutProps) {
  return (
    <div className={classes.root}>
      <div className={classes.grid}>
        <div className={classes.sideBar}>
          <MainNav />
          <Nav className={st(classes.nav)} pagesNav={pagesNav} />
          <Nav className={st(classes.nav)} componentNav={componentNav} />
        </div>
        {children}
      </div>
    </div>
  );
}
