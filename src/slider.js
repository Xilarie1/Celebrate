export function createVelocitySlider(parent) {
  const sliderLabel = document.createElement("label");
  sliderLabel.setAttribute("for", "velocitySlider");
  sliderLabel.textContent = "Start Velocity:";

  const slider = document.createElement("input");
  slider.type = "range";
  slider.id = "velocitySlider";
  slider.min = 1;
  slider.max = 70;
  slider.value = 20;

  const sliderValue = document.createElement("span");
  sliderValue.id = "velocityValue";
  sliderValue.textContent = slider.value;

  slider.addEventListener("input", () => {
    sliderValue.textContent = slider.value;
  });

  parent.appendChild(sliderLabel);
  parent.appendChild(slider);
  parent.appendChild(sliderValue);

  return () => Number(slider.value);
}
