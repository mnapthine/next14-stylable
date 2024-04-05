"use client";
import { st, classes } from "./header.st.css";
import { AppBar } from "@actionishope/shelley/AppBar";
import { RiContrast2Fill } from "react-icons/ri";
import { IconButton } from "@actionishope/shelley/Button";
import { H2 } from "@actionishope/shelley/Text";
import { Menu, MenuTrigger } from "@actionishope/shelley/Menu";
import { Item } from "@actionishope/shelley/Item";
import { useTheme } from "next-themes";
import Link from "next/link";
interface HeaderProps {
  className?: string;
  content?: string;
}

export function Header(props: HeaderProps) {
  const { setTheme, theme } = useTheme();
  return (
    <AppBar className={st(classes.root, props.className)} elementType="header">
      <H2 uppercase vol={3}>
        <Link href="/" className={classes.homeLink}>
          Shelley
        </Link>
      </H2>

      <MenuTrigger>
        <IconButton tone={"contrast"}>
          <RiContrast2Fill />
        </IconButton>
        <Menu
          selectedKeys={[`${theme}`]}
          selectionMode="single"
          onAction={(value) => setTheme(value as string)}
        >
          <Item key="system">system</Item>
          <Item key="light">light</Item>
          <Item key="dark">dark</Item>
        </Menu>
      </MenuTrigger>
    </AppBar>
  );
}
