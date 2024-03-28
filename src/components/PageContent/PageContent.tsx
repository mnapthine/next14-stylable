import { st, classes } from "./pageContent.st.css";
import {
  TableOfContents,
  TableOfContentsProps,
} from "@/components/TableOfContents";

interface PageContentProps {
  children: React.ReactNode;
  toc?: TableOfContentsProps["items"];
}
export function PageContent({ children, toc }: PageContentProps) {
  return (
    <div className={st(classes.root, { hasTOC: Boolean(toc) })}>
      <main className={classes.content}>{children}</main>
      <div className={classes.sideBar}>
        {toc && <TableOfContents items={toc} />}
      </div>
    </div>
  );
}
