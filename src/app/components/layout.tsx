/** /components layout.tsx */
import { PageLayout } from "@/components/PageLayout/PageLayout";

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageLayout>{children}</PageLayout>;
}
