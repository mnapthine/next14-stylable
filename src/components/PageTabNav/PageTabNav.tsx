"use client";
import Link from "next/link";
import useSize from "@react-hook/size";
// import { usePathname } from "next/navigation";
import { st, classes } from "./pageTabNav.st.css";
// import { useRef, useState } from "react";

interface PageTabNavProps {
  className?: string;
  componentUrl: string;
  activeTab?: string;
}

export function PageTabNav(props: PageTabNavProps) {
  const { className, componentUrl, activeTab } = props;

  // const pathname = usePathname();

  // const [activeTab, setActiveTab] = useState("usage");

  // if (pathname.includes("style-api")) {
  //   setActiveTab("styling");
  // }

  return (
    <nav
      className={st(classes.root, className)}
      aria-label="Component Navigation Tabs"
    >
      <Link
        className={st(classes.tab, { isActive: activeTab === "usage" })}
        href={componentUrl}
        // ref={usageLink}
      >
        Usage
      </Link>
      <Link
        className={st(classes.tab, { isActive: activeTab === "styling" })}
        href={`${componentUrl}/style-api`}
        // ref={stylingLink}
      >
        Styling
      </Link>
    </nav>
  );
}
