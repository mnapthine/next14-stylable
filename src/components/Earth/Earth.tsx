"use client";

import { Canvas, useLoader } from "@react-three/fiber";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useRef } from "react";

import { TextureLoader } from "three/src/loaders/TextureLoader.js";
import { classes, st } from "./earth.st.css";
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

  const scene = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scene,
    offset: ["start end", "end start"],
  });

  const [scrollY, setScrollY] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollY(latest);
  });

  return (
    <div className={st(classes.root)}>
      <Canvas ref={scene}>
        <ambientLight intensity={0.9} />
        <directionalLight intensity={6.5} position={[2, 0, -0.25]} />
        <mesh scale={2.5} rotation-y={scrollY + 4.1} rotation-x={0.6}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
        </mesh>
      </Canvas>
    </div>
  );
}

export default Earth;
