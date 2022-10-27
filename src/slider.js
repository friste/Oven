var slider = $("#slider");

slider.roundSlider({
    radius: 175,
    width: 20,
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
    drag: "traceEvent"
});

$("#slider").roundSlider({ "rangeColor": "#eb6262", "tooltipColor": "#FFFFFF" });


const confirmButton = document.getElementById("button")
confirmButton.textContent = "Cook"

function traceEvent(e) {
    if (slider.getValue() >= 10 && slider.getValue() <= 32) {
        console.log("test");
        document.getElementById("pizza").src = "./PIZZAS/cheese/Raw_cheese4.png";
    } else if (slider.getValue() >= 33 && slider.getValue() <= 54) {
        document.getElementById("pizza").src = "./PIZZAS/pepperoni/cooked.png";
    } else if (slider.getValue() >= 55 && slider.getValue() <= 76) {
        document.getElementById("pizza").src = "./PIZZAS/veggie/veggie4.png";
    } else if (slider.getValue() >= 77 && slider.getValue() <= 98) {
        document.getElementById("pizza").src = "./PIZZAS/pineapple/cooked_hawaiian.png";
    } else if (slider.getValue() >= 98 && slider.getValue() <= 120) {
        document.getElementById("pizza").src = "./PIZZAS/indian/cooked_indian.png";
    }
}

confirmButton.onclick = function(ev) {
    sessionStorage.setItem("duration", slider.getValue())
        // alert("The timer duration will be " + sessionStorage.getItem("duration"))
    window.location.href = "timer.html"
}