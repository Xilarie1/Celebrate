import { firework } from "./confetti.js"; // new fireworks function
import randomColor from "randomcolor";

export function initButton() {
  const button = document.getElementById("myButton");

  button.addEventListener("click", () => {
    // Change button color randomly
    button.style.backgroundColor = randomColor();

    // Launch fireworks for 10 seconds
    firework(10000);
  });
}
