import { tsParticles } from "@tsparticles/engine";
import { loadBasic } from "@tsparticles/basic";

export async function initBackground() {
  await loadBasic(tsParticles);

  tsParticles.load({
    id: "background",
    options: {
      background: {
        color: "#000000",
      },
      particles: {
        number: {
          value: 200,
          density: { enable: true, area: 800 },
        },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
        opacity: {
          value: 1,
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.5,
            sync: false,
          },
        },
        move: {
          enable: true,
          speed: 0.2,
          direction: "none",
          outModes: { default: "out" },
        },
      },
      detectRetina: true,
    },
  });
}
