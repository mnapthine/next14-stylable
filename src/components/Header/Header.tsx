"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { options } from "#site/content";
import { H2, Text } from "@actionishope/shelley/Text";
import { st, classes } from "./header.st.css";
import { AppBar } from "@actionishope/shelley/AppBar";
import { RiCompassLine } from "react-icons/ri";
interface HeaderProps {
  className?: string;
  content?: string;
}

export function Header(props: HeaderProps) {
  const pathname = usePathname();
  return (
    <AppBar className={st(classes.root)} elementType="header">
      <H2 uppercase vol={3}>
        Shelley
      </H2>
      {/* <nav className={classes.nav}>
        {options.links.map(
          (link, idx) =>
            link.type === "navigation" && (
              <Link
                key={idx}
                href={`${link.link}`}
                className={st(classes.navLink, {
                  isActive: link.link === pathname,
                  isActivePath: Boolean(
                    pathname.includes(link.link) && link.link !== pathname
                  ),
                })}
              >
                <Text
                  className={classes.navLinkText}
                  elementType="span"
                  vol={1}
                  weight={6}
                  startAdornment={<RiCompassLine />}
                >
                  {link.text}
                </Text>
              </Link>
            )
        )}
      </nav> */}
    </AppBar>
  );
}
