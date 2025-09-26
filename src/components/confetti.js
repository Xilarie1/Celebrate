import confetti from "canvas-confetti";

/**
 * Fireworks-style confetti animation
 * @param {number} durationMs - How long the fireworks should run (milliseconds)
 * @param {function} getVelocity - Function that returns the current startVelocity
 *                                 Defaults to 20 if not provided
 */
export function firework(durationMs = 15000, getVelocity = () => 20) {
  // Total duration of the fireworks animation
  const duration = durationMs;

  // Timestamp when the animation should stop
  const animationEnd = Date.now() + duration;

  // Default options for each confetti burst
  const defaults = {
    spread: 400, // how wide the particles spread (degrees)
    ticks: 60, // how long each particle moves before disappearing
    zIndex: 0, // layering; 0 = behind everything with higher z-index
  };

  /**
   * Helper function to generate a random number between min and max
   * Used to vary horizontal position of fireworks for left/right bursts
   */
  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  // Repeat bursts every 250ms until duration ends
  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now(); // how much time is left

    // Stop interval when time is up
    if (timeLeft <= 0) {
      clearInterval(interval);
      return;
    }

    // Adjust particle count dynamically so fireworks fade out over time
    const particleCount = 50 * (timeLeft / duration);

    // LEFT-SIDE BURSTS
    confetti({
      ...defaults, // use default options for spread, ticks, zIndex
      startVelocity: getVelocity(), // get current velocity dynamically
      particleCount, // number of particles for this burst
      origin: {
        x: randomInRange(0.1, 0.3), // horizontal start (10%–30% from left)
        y: Math.random() - 0.2, // vertical start (-0.2–0.8)
      },
    });

    // RIGHT-SIDE BURSTS
    confetti({
      ...defaults,
      startVelocity: getVelocity(), // dynamic velocity for right bursts
      particleCount,
      origin: {
        x: randomInRange(0.7, 0.9), // horizontal start (70%–90% from left)
        y: Math.random() - 0.2, // vertical start
      },
    });
  }, 250); // run bursts every 250ms
}
