"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Text } from "@actionishope/shelley/Text";
import { options } from "#site/content";
import { st, classes } from "./mainNav.st.css";
import { ReactElement } from "react";

import { RiCompassLine } from "react-icons/ri";
import { RiPaletteLine } from "react-icons/ri";
import { RiLayoutGridFill } from "react-icons/ri";
import { RiArticleLine } from "react-icons/ri";
interface MainNavProps {
  className?: string;
  content?: string;
}

export function MainNav(props: MainNavProps) {
  const pathname = usePathname();

  const iconLookup: { [key: string]: ReactElement } = {
    "/getting-started": <RiCompassLine />,
    "/styling-guide": <RiPaletteLine />,
    "/components": <RiLayoutGridFill />,
    "/blog": <RiArticleLine />,
  };
  return (
    <nav
      className={st(classes.root, props?.className)}
      aria-label="Main Navigation"
    >
      <ul className={classes.list}>
        {options.links.map(
          (link, idx) =>
            link.type === "navigation" && (
              <li key={idx} className={classes.listItem}>
                <Link
                  href={`${link.link}`}
                  className={st(classes.anchor, {
                    isActive: link.link === pathname,
                    isActivePath:
                      Boolean(pathname.includes(link.link)) &&
                      link.link !== "/",
                  })}
                >
                  <Text
                    className={classes.linkText}
                    elementType="span"
                    vol={2}
                    weight={5}
                    startAdornment={
                      <span className={classes.icon}>
                        {iconLookup[link.link]}
                      </span>
                    }
                  >
                    {link.text}
                  </Text>
                </Link>
              </li>
            )
        )}
      </ul>
    </nav>
  );
}
