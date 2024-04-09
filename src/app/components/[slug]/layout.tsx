import type { ReactNode } from "react";

export default function Layout(props: {
  tabs: ReactNode;
  children: ReactNode;
  params: { slug: string };
}) {
  return props.tabs;
}
