"use client";
import React, { useCallback } from "react";
import { H2 } from "@actionishope/shelley/Text";
import { st, classes } from "./tableOfContents.st.css";

export interface TableOfContentsProps {
  className?: string;
  items: Item[];
}

interface Item {
  title: string;
  url: string;
  items: Item[];
}

export function TableOfContents(props: TableOfContentsProps) {
  const { items, className } = props;
  const headerHeight = 130;

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, url: string) => {
      e.preventDefault();
      const element = document.querySelector(url) as HTMLElement;
      if (element) {
        const offsetTop = element.offsetTop - headerHeight;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
        // update the URL hash
        window.history.pushState({}, "", url);
      }
    },
    [headerHeight]
  );

  const renderListItems = (items: Item[]) => {
    return items.map((item) => (
      <li key={item.url} className={classes.listItem}>
        <a
          href={item.url}
          className={classes.anchor}
          onClick={(e) => handleClick(e, item.url)}
        >
          {item.title}
        </a>
        {item.items && item.items.length > 0 && (
          <ol className={classes.list}>{renderListItems(item.items)}</ol>
        )}
      </li>
    ));
  };

  return (
    <nav className={st(classes.root, className)}>
      <H2 vol={1} className={classes.title} uppercase>
        Contents
      </H2>
      {<ol className={classes.list}>{renderListItems(items)}</ol>}
    </nav>
  );
}
