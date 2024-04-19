import Link from "next/link";
import { st, classes } from "./pageTabNav.st.css";

interface PageTabNavProps {
  className?: string;
  componentUrl: string;
  activeTab?: string;
}

export function PageTabNav(props: PageTabNavProps) {
  const { className, componentUrl, activeTab } = props;

  return (
    <nav
      className={st(classes.root, className)}
      aria-label="Component Navigation Tabs"
    >
      <Link
        className={st(classes.tab, { isActive: activeTab === "usage" })}
        href={componentUrl}
      >
        Usage
      </Link>
      <Link
        className={st(classes.tab, { isActive: activeTab === "styling" })}
        href={`${componentUrl}/style-api`}
      >
        Styling
      </Link>
    </nav>
  );
}
