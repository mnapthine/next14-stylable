// import {
//   componentDetails as allComponentDetails,
//   components as allComponents,
// } from "#site/content";

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  // const component = allComponents.find(
  //   (component) => component.slug === params.slug
  // );
  // if (!component) throw new Error(`Post not found for slug: ${params.slug}`);
  // return { title: `${component.title} styling and theming` };
  return { title: "title" };
};

export default function Page(props: { params: { slug: string } }) {
  const { params } = props;
  // const componentDetails = allComponentDetails.find(
  //   (item) => item.component === params.slug && item.category === "styling"
  // );

  return (
    <>
      <p>/hgjhgjgj</p>
    </>
  );
}
