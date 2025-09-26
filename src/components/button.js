// import { firework } from "./confetti.js"; // new fireworks function
// import randomColor from "randomcolor";

// export function initButton() {
//   const button = document.getElementById("myButton");

//   button.addEventListener("click", () => {
//     // Change button color randomly
//     button.style.backgroundColor = randomColor();

//     // Launch fireworks for 10 seconds
//     firework(10000);
//   });
// }
import { firework } from "./confetti.js";
import randomColor from "randomcolor";

/**
 * Initialize button with slider-controlled fireworks
 * @param {function} getSliderValue - function returning current slider value
 */
export function initButton(getSliderValue) {
  const button = document.getElementById("myButton");

  button.addEventListener("click", () => {
    button.style.backgroundColor = randomColor(); // random button color
    firework(10000, getSliderValue); // use slider value for startVelocity
  });
}
