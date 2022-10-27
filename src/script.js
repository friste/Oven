let dur = 30;
// let dur = duration;
let durString = dur.toString();
start_tracking = true;
let newDur = durString.concat("s");
var nhand1 = document.getElementById("clk");
var nhand2 = document.getElementById("clk2");
nhand1.style.animationDuration = newDur;
nhand2.style.animationDuration = newDur;



let flag = false;
var pizza = "none";
var defaults = {},
    one_second = 1000,
    one_minute = one_second * 60,
    one_hour = one_minute * 60,
    startDate = new Date(),
    clock = document.getElementById('time');




if (sessionStorage.getItem("duration") >= 10 && sessionStorage.getItem("duration") <= 32) {
    console.log("test");
    document.getElementById("pizza").src = "./PIZZAS/cheese/Raw_cheese1.png";
    pizza = "cheese";
} else if (sessionStorage.getItem("duration") >= 33 && sessionStorage.getItem("duration") <= 54) {
    document.getElementById("pizza").src = "./PIZZAS/pepperoni/raw.png";
    pizza = "pepperoni";
} else if (sessionStorage.getItem("duration") >= 55 && sessionStorage.getItem("duration") <= 76) {
    document.getElementById("pizza").src = "./PIZZAS/veggie/veggie1.png";
    pizza = "veggie";
} else if (sessionStorage.getItem("duration") >= 77 && sessionStorage.getItem("duration") <= 98) {
    document.getElementById("pizza").src = "./PIZZAS/pineapple/raw_hawaiian.png";
    pizza = "pineapple";
} else if (sessionStorage.getItem("duration") >= 98 && sessionStorage.getItem("duration") <= 120) {
    document.getElementById("pizza").src = "./PIZZAS/indian/raw_indian.png";
    pizza = "indian";
}


var requestAnimationFrame = (function() {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(callback) {
            window.setTimeout(callback, 1000 / 60);
        };
}());


tick();

function tick() {
    if (flag == false) {

        var now = new Date(),
            elapsed = now - startDate,
            parts = [];

        parts[0] = '' + Math.floor(elapsed / one_hour);
        parts[1] = '' + Math.floor((elapsed % one_hour) / one_minute);
        parts[2] = '' + Math.floor(((elapsed % one_hour) % one_minute) / one_second);

        parts[0] = (parts[0].length == 1) ? '0' + parts[0] : parts[0];
        parts[1] = (parts[1].length == 1) ? '0' + parts[1] : parts[1];
        parts[2] = (parts[2].length == 1) ? '0' + parts[2] : parts[2];
        let partSeconds = (parts[0] * 3600) + (parts[1] * 60) + parts[2];
        // let dur = sessionStorage.getItem("duration") * 60;
        // let dur = 60;
        // if (partSeconds == 5) {
        //     console.log(partSeconds);
        //     document.getElementById("pizza").src = "./PIZZAS/cheese/Raw_cheese4.png";
        //     // flag = true;
        //     // getElementById("clk").style.animationIterationCount = 0;
        // }

        if (partSeconds >= 0 && partSeconds <= dur / 4) {
            if (pizza == "cheese") {
                document.getElementById("pizza").src = "./PIZZAS/cheese/Raw_cheese1.png";
            } else if (pizza == "veggie") {
                document.getElementById("pizza").src = "./PIZZAS/veggie/veggie1.png";
            } else if (pizza == "pineapple") {
                document.getElementById("pizza").src = "./PIZZAS/pineapple/raw_hawaiian.png";
            } else if (pizza == "indian") {
                document.getElementById("pizza").src = "./PIZZAS/indian/raw_indian.png";
            } else if (pizza == "pepperoni") {
                document.getElementById("pizza").src = "./PIZZAS/pepperoni/raw.png";
            }
        } else if (partSeconds > dur / 4 && partSeconds <= dur / 2) {
            if (pizza == "cheese") {
                document.getElementById("pizza").src = "./PIZZAS/cheese/Raw_cheese2.png";
            } else if (pizza == "veggie") {
                document.getElementById("pizza").src = "./PIZZAS/veggie/veggie2.png";
            } else if (pizza == "pineapple") {
                document.getElementById("pizza").src = "./PIZZAS/pineapple/stage_1_hawaiian.png";
            } else if (pizza == "indian") {
                document.getElementById("pizza").src = "./PIZZAS/indian/stage_1_indian.png";
            } else if (pizza == "pepperoni") {
                document.getElementById("pizza").src = "./PIZZAS/pepperoni/stage1.png";
            }
        } else if (partSeconds > dur / 2 && partSeconds <= (dur * 3) / 4) {
            if (pizza == "cheese") {
                document.getElementById("pizza").src = "./PIZZAS/cheese/Raw_cheese3.png";
            } else if (pizza == "veggie") {
                document.getElementById("pizza").src = "./PIZZAS/veggie/veggie3.png";
            } else if (pizza == "pineapple") {
                document.getElementById("pizza").src = "./PIZZAS/pineapple/stage_2_hawaiian.png";
            } else if (pizza == "indian") {
                document.getElementById("pizza").src = "./PIZZAS/indian/stage_2_indian.png";
            } else if (pizza == "pepperoni") {
                document.getElementById("pizza").src = "./PIZZAS/pepperoni/stage2.png";
            }
        } else if (partSeconds > (dur * 3) / 4 && partSeconds < dur) {
            if (pizza == "cheese") {
                document.getElementById("pizza").src = "./PIZZAS/cheese/Raw_cheese4.png";
            } else if (pizza == "veggie") {
                document.getElementById("pizza").src = "./PIZZAS/veggie/veggie4.png";
            } else if (pizza == "pineapple") {
                document.getElementById("pizza").src = "./PIZZAS/pineapple/cooked_hawaiian.png";
            } else if (pizza == "indian") {
                document.getElementById("pizza").src = "./PIZZAS/indian/cooked_indian.png";
            } else if (pizza == "pepperoni") {
                document.getElementById("pizza").src = "./PIZZAS/pepperoni/cooked.png";
            }
        } else if (partSeconds == dur) {
            flag = true;
            var hand1 = document.getElementById("clk");
            var hand2 = document.getElementById("clk2");
            hand1.style.animationPlayState = 'paused';
            hand2.style.animationPlayState = 'paused';
        }


        clock.innerText = parts.join(':');

        requestAnimationFrame(tick);

    } else {

        alert("Congratulations! Your Pizza is cooked!");
    }

}