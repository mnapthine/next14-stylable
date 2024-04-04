"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Text } from "@actionishope/shelley/Text";
import { options } from "#site/content";
import { RiCompassLine } from "react-icons/ri";
import { st, classes } from "./mainNav.st.css";
interface MainNavProps {
  className?: string;
  content?: string;
}

export function MainNav(props: MainNavProps) {
  const pathname = usePathname();
  return (
    <nav
      className={st(classes.root, props?.className)}
      aria-label="Main Navigation"
    >
      <ul className={classes.list}>
        {options.links.map(
          (link, idx) =>
            link.type === "navigation" && (
              <li key={idx} className={classes.li}>
                <Link
                  href={`${link.link}`}
                  className={st(classes.navLink, {
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
                        <RiCompassLine />
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
