const counters = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let buttons = document.getElementsByTagName("button");
var start_tracking = false;

function changeColor(btn) {
    counters[btn.name - 1] += 1;
    btn.style.opacity = 1.0 - counters[btn.name - 1] * 0.50;
    console.log(btn.style.opacity);

    var calibrating = false;
    for (let i = 0; i < 9; i++) {
        let button = buttons[i];
        if (button.style.opacity > 0) {
            calibrating = true;
            break;
        }
    }
    if (calibrating == false) {
        console.log("NEXT BUTTON SHOULD APPEAR")
        goNext();
    }
}


function goNext() {
    let b = document.createElement("button");
    b.innerHTML = "Next";
    b.id = "next";
    b.className = "next";
    b.onclick = function() {
        window.location.href = "slider.html"
    };
    document.body.appendChild(b);
}