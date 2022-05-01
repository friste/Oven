var slider = $("#slider");

slider.roundSlider({
    radius: 200,
    width: 14,
    svgMode: false,
    pathColor: "#ee6161",
    editableTooltip: false,
    tooltipColor: "#000000",
    rangeColor: "#e43b3b",
    handleSize: "+8",
    handleShape: "dot",
    sliderType: "min-range",
    startAngle: 90,
    startValue: 10,
    max: 120,
    min: 10,
    endValue: 120,
    step: 10,
});

$("#slider").roundSlider({ "rangeColor": "#ff8d00", "tooltipColor": "#ff8d00" });


const confirmButton = document.getElementById("button")
confirmButton.textContent = "Cook"
confirmButton.onclick = function(ev) {
    sessionStorage.setItem("duration", slider.getValue())
        // alert("The timer duration will be " + sessionStorage.getItem("duration"))
    window.location.href = "index.html"
}
