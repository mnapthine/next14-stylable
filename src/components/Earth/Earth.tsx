"use client";
import { Canvas, useLoader, extend, useFrame } from "@react-three/fiber";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useRef } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";
import { MeshPhysicalMaterial, Mesh } from "three";
import { classes, st } from "./earth.st.css";

// Many thanks to Olivier Larose for the original tutorial
// https://blog.olivierlarose.com/tutorials/3d-earth

extend({ MeshPhysicalMaterial });

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
  const meshRef = useRef<Mesh>(null);

  const { scrollYProgress } = useScroll({
    target: scene,
    offset: ["start end", "end start"],
  });

  const [scrollY, setScrollY] = useState(0);

  // Initial rotation to face Eurpoe
  const latitudeRotation = 40.5 * (Math.PI / 180); // Negative for rotating backwards
  const longitudeRotation = -140.1 * (Math.PI / 180); // Negative for rotating to the right

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollY(latest);
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.012; // Adjust rotation speed as needed
    }
  });

  return (
    <div ref={scene} className={st(classes.root, props.className)}>
      <Canvas>
        <ambientLight intensity={0.9} />
        <directionalLight intensity={6.5} position={[2, 0, -0.25]} />
        <mesh
          ref={meshRef}
          scale={2.4}
          rotation={[latitudeRotation, longitudeRotation, 0]}
        >
          <sphereGeometry args={[1, 64, 64]} />
          <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
        </mesh>
        {/* Atmosphere Mesh */}
        <mesh scale={2.1} rotation-y={scrollY + 4.1} rotation-x={0.6}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshPhysicalMaterial
            transparent
            opacity={0.05}
            emissive={"blue"} // Adjust the color to match the hue you want
            emissiveIntensity={100}
            depthWrite={false} // Helps with rendering transparency
          />
        </mesh>
      </Canvas>
    </div>
  );
}

export default Earth;
