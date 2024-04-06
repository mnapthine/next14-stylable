"use client";
import { useEffect } from "react";

/**
 * Sets a custom CSS variable property for the viewport height,
 * this is useful for mobile browsers that hide the address bar
 * on scroll. Usage:
 * - set @property st-global(--vh); in your stylable stylesheet.
 * - then use calc(var(--vh, 1vh) * 100) to set the height of an element.
 * @returns null
 */
export function SetViewportHeight() {
  useEffect(() => {
    // Update --vh custom property
    const updateVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    // Update on mount and resize
    updateVH();
    window.addEventListener("resize", updateVH);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", updateVH);
  }, []);

  return null;
}
