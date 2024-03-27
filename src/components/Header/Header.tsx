"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { options } from "#site/content";
import { H2 } from "@actionishope/shelley/Text";
import { st, classes } from "./header.st.css";
import { AppBar } from "@actionishope/shelley/AppBar";
interface HeaderProps {
  className?: string;
  content?: string;
}

export function Header(props: HeaderProps) {
  // const buttons = componentDocs.filter((comp) => comp.category === "Buttons");
  // const content = componentDocs.filter((comp) => comp.category === "Content");
  const pathname = usePathname();

  return (
    <AppBar className={st(classes.root)} elementType="header">
      <H2 uppercase vol={3}>
        Shelley
      </H2>
      <nav className={classes.nav}>
        {options.links.map(
          (link, idx) =>
            link.type === "navigation" && (
              <Link
                key={idx}
                href={`${link.link}`}
                className={link.link === pathname ? "active" : ""}
              >
                {link.text}
              </Link>
            )
        )}
      </nav>
    </AppBar>
  );
}
