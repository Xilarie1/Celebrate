export function createVelocitySlider(parent) {
  // Create a label element to describe what the slider controls
  const sliderLabel = document.createElement("label");
  sliderLabel.setAttribute("for", "velocitySlider"); // links label to input
  sliderLabel.textContent = "Start Velocity:";

  // Create the actual slider input
  const slider = document.createElement("input");
  slider.type = "range"; // makes it a slider instead of text input
  slider.id = "velocitySlider";
  slider.min = 1; // minimum slider value
  slider.max = 70; // maximum slider value
  slider.value = 20; // initial default value

  // Create a span to display the current value of the slider
  const sliderValue = document.createElement("span");
  sliderValue.id = "velocityValue";
  sliderValue.textContent = slider.value; // show default value at start

  // Update the span text whenever the slider is moved
  slider.addEventListener("input", () => {
    sliderValue.textContent = slider.value;
  });

  // Add all elements to the parent container
  parent.appendChild(sliderLabel);
  parent.appendChild(slider);
  parent.appendChild(sliderValue);

  // Return a function that lets other code get the current value
  // (useful for reading the slider without querying the DOM directly)
  return () => Number(slider.value);
}
