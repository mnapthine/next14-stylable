"use client";
import React, { useCallback, useEffect } from "react";
import { H2 } from "@actionishope/shelley/Text";
import { st, classes } from "./tableOfContents.st.css";

export interface TableOfContentsProps {
  id?: string;
  className?: string;
  items: Item[];
}

interface Item {
  title: string;
  url: string;
  items: Item[];
}

export function TableOfContents(props: TableOfContentsProps) {
  const { className, id, items } = props;
  const headerHeight = 130;

  useEffect(() => {
    let scopes = "";
    const tocContentContainer = document.querySelector("#tocContent");
    const tocContent = tocContentContainer?.querySelectorAll("div[id]");
    // Add the view-timeline-name: {id} to each section
    tocContent &&
      tocContent.forEach((section, i) => {
        section.setAttribute("style", `view-timeline-name: --${section.id};`);
        scopes += `--${section.id}`;
        scopes += i === tocContent.length - 1 ? "" : ", ";
      });
    // Add the timeline-scope: {id}, {id},... on the container
    tocContentContainer?.setAttribute("style", `timeline-scope: ${scopes}`);
  }, []);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, url: string) => {
      e.preventDefault();
      const element = document.querySelector(url) as HTMLElement;
      if (element) {
        const offsetTop = element.offsetTop - headerHeight - 200;
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

  /**
   *
   * @param items
   * @returns
   */

  const renderListItems = (items: Item[]) => {
    return items.map((item) => (
      <li key={item.url} className={classes.listItem}>
        <a
          href={item.url}
          className={classes.anchor}
          style={{
            animationTimeline: `--${item.url.slice(1)}`,
          }}
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
    <nav className={st(classes.root, className)} id={id}>
      <H2 vol={1} className={classes.title} uppercase>
        Page Contents
      </H2>
      {<ol className={classes.list}>{renderListItems(items)}</ol>}
    </nav>
  );
}
