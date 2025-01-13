"use client";

import { useCallback } from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesComponent() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: false,
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100, // Reduced distance for hover effect
              duration: 1,
            },
          },
        },
        particles: {
          color: {
            value: ["#ff4757", "#1e90ff"], // Reddish and bluish colors
          },
          links: {
            enable: false, // Disable links
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 1, // Slower speed for smoother movement
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1000,
            },
            value: 100, // Increased particle count
          },
          opacity: {
            value: { min: 0.05, max: 0.3 }, // Reduced opacity range
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1,
            },
          },
          shape: {
            type: "image", // Use image instead of circle
            image: {
              src: "hero/logo2.png", // Replace with your image path
              width: 20, // Adjust width as needed
              height: 20, // Adjust height as needed
            },
          },
          size: {
            value: { min: 10, max: 30 }, // Reduced size range
            animation: {
              enable: true,
              speed: 5,
              minimumValue: 10,
              sync: false,
            },
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 z-10"
    />
  );
}
