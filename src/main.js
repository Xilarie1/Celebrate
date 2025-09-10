import { initBackground } from "./components/background.js";
import { initButton } from "./components/button.js";
import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  document.title = "Celebrate";
  const app = document.getElementById("app");

  // Background
  const background = document.createElement("div");
  background.id = "background";
  app.appendChild(background);

  // Center container
  const center = document.createElement("div");
  center.className = "center";

  // Button
  const button = document.createElement("button");
  button.id = "myButton";
  button.textContent = "Fireworks Gandalf!";

  center.appendChild(button);
  app.appendChild(center);

  initBackground();
  initButton();
});
