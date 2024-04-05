"use client";

import { Canvas, useLoader } from "@react-three/fiber";

import { TextureLoader } from "three/src/loaders/TextureLoader.js";

interface EarthProps {
  className?: string;
  content?: string;
}

function Earth(props: EarthProps) {
  const [color, normal, aoMap] = useLoader(TextureLoader, [
    "assets/color.jpeg",
    "assets/normal.png",
    "assets/occlusion.jpeg",
  ]);

  return (
    <Canvas>
      <ambientLight intensity={0.1} />
      <directionalLight intensity={3.5} position={[1, 0, -0.25]} />
      <mesh scale={2.5}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
      </mesh>
    </Canvas>
  );
}

export default Earth;
