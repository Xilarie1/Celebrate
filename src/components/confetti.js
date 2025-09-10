import confetti from "canvas-confetti";

/**
 * Fireworks-style confetti animation
 * @param {number} durationMs - How long the fireworks should run (milliseconds)
 */
export function firework(durationMs = 15000) {
  // Duration of the fireworks in milliseconds
  const duration = durationMs;

  // Timestamp when the animation should stop
  const animationEnd = Date.now() + duration;

  // Default confetti options that are reused for each burst
  const defaults = {
    startVelocity: 20, // Initial speed of confetti particles (pixels/frame)
    spread: 400, // How wide the particles spread (degrees). 360 = full circle
    ticks: 60, // How many times each particle moves before disappearing
    zIndex: 0, // Layering of the canvas, 0 = behind everything with higher z-index elements
  };

  /**
   * Helper function to get a random number between min and max
   * Used to vary the horizontal launch position of the fireworks
   */
  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  // Launch bursts repeatedly using setInterval
  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now(); // How much time is left

    // Stop interval when duration is over
    if (timeLeft <= 0) {
      clearInterval(interval);
      return;
    }

    // Dynamically adjust number of particles over time
    // Starts full and fades out gradually as time passes
    const particleCount = 50 * (timeLeft / duration);

    // LEFT-SIDE BURSTS
    confetti({
      ...defaults, // use default options
      particleCount, // number of particles
      origin: {
        x: randomInRange(0.1, 0.3), // horizontal start (10%–30% from left)
        y: Math.random() - 0.2, // vertical start (-0.2–0.8) to allow some off-screen bursts
      },
    });

    // RIGHT-SIDE BURSTS
    confetti({
      ...defaults,
      particleCount,
      origin: {
        x: randomInRange(0.7, 0.9), // horizontal start (70%–90% from left)
        y: Math.random() - 0.2,
      },
    });
  }, 250); // Repeat bursts every 250ms
}
