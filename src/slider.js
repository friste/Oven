var slider = $("#slider")

slider.roundSlider({
  radius:200,
  width:14,
  svgMode: false,
  pathColor: "#000000",
  editableTooltip: false,
  tooltipColor: "#000000",
  rangeColor: "#EB6262",
  handleSize:"+8",
  handleShape: "dot",
  sliderType: "min-range",
  startAngle: 90,
  startValue: 10,
  max:120,
  endValue: 120,
  step: 10
});

const confirmButton = document.getElementById("button")
confirmButton.textContent = "Confirm Duration"
confirmButton.onclick = function(ev) {
  sessionStorage.setItem("duration", slider.getValue())
  // alert("The timer duration will be " + sessionStorage.getItem("duration"))
  window.location.href = "index.html"
}
