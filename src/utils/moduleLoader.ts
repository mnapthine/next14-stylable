// utils/loadModulesDynamically.ts

// import { BaseComponentProps } from '../types';

interface BaseComponentProps {
  // Common props across all components
}

// Assuming a simple map for demonstration purposes
const moduleMap: Record<string, string> = {
  Radio: "@actionishope/shelley/Radio",
  Checkbox: "@actionishope/shelley/Checkbox",
  // other mappings...
};

async function loadModulesDynamically(
  moduleIdentifiers: string[]
): Promise<Record<string, any>> {
  const importPromises = moduleIdentifiers.map((identifier) => {
    const modulePath = moduleMap[identifier] || identifier;
    return import(/* webpackChunkName: "[request]" */ modulePath);
  });

  const modules = await Promise.all(importPromises);

  const ReactLiveScope: Record<
    string,
    React.ComponentType<BaseComponentProps> | any
  > = {};
  moduleIdentifiers.forEach((identifier, index) => {
    ReactLiveScope[identifier] = modules[index].default || modules[index];
  });

  return ReactLiveScope;
}

export default loadModulesDynamically;

// Usage in Page Directory would look a bit like this
// pages/MyPage.tsx
// import loadModulesDynamically from '../utils/loadModulesDynamically';
// import { GetServerSideProps } from 'next';

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const moduleIdentifiers = ['Radio', 'Checkbox']; // specify modules to load
//   const ReactLiveScope = await loadModulesDynamically(moduleIdentifiers);

//   return { props: { ReactLiveScope } };
// };

// // Type for the props expected by the component
// interface MyPageProps {
//   ReactLiveScope: Record<string, any>; // Use a more specific type if possible
// }

// const MyPage: React.FC<MyPageProps> = ({ ReactLiveScope }) => {
//   // Use ReactLiveScope in your component
//   return <div>{/* content */}</div>;
// };

// export default MyPage;

// Clientside:

// // components/MyComponent.tsx
// import React, { useEffect, useState } from 'react';
// import loadModulesDynamically from '../utils/loadModulesDynamically';

// const MyComponent: React.FC = () => {
//   const [liveScope, setLiveScope] = useState<Record<string, any>>({}); // Use a more specific type if possible

//   useEffect(() => {
//     const moduleIdentifiers = ['Radio', 'Checkbox']; // specify modules to load
//     loadModulesDynamically(moduleIdentifiers).then(setLiveScope);
//   }, []);

//   if (Object.keys(liveScope).length === 0) {
//     return <div>Loading...</div>;
//   }

//   // Use `liveScope` here
//   return <div>{/* Render your dynamically loaded components */}</div>;
// };

// export default MyComponent;
