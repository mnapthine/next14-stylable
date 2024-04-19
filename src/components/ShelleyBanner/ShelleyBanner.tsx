import type React from "react";
import { H1, P } from "@actionishope/shelley/Text";
import { st, classes } from "./shelleyBanner.st.css";
import { ButtonGroup, Button } from "@actionishope/shelley/Button";
import Link from "next/link";

export const ShelleyBanner = ({
  className: classNameProp,
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={st(classes.root, classNameProp)}>
      <div className={classes.grid}>
        <H1 className={classes.title} uppercase vol={9}>
          Shelley
        </H1>
        <P className={classes.tld} vol={2} weight={5}>
          .earth
        </P>

        {/* <Logo className={classes.logoPosition} /> */}

        <P className={classes.tagline} vol={2} uppercase weight={5}>
          {/* Stylable <abbr title="User Interface">UI</abbr> blocks */}A{" "}
          {/* <a href="http://jhdjdii.com">Stylable</a> User Interface */}
          Stylable User Interface
        </P>

        <ButtonGroup className={classes.btnGroup} vol={1}>
          <Button
            tone="support"
            variant="primary"
            isCta
            elementType={Link}
            href={"/getting-started"}
          >
            Get Started
          </Button>
          <Button
            tone="lead"
            variant="secondary"
            isCta
            elementType={"a"}
            href={"/components"}
          >
            Components
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};
