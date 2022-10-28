window.saveDataAcrossSessions = true
    // let image = getImage()
    // let nextImageElement = getImage(true)
let startTime = Number.POSITIVE_INFINITY
let direction = null
let burnt = false;
const look_delay = 700 // 0.7 second
    // const left = 0
    // const right = window.innerWidth

const left = window.innerWidth / 8
const right = window.innerWidth - window.innerWidth / 8

const up = window.innerHeight / 8
const down = window.innerHeight - window.innerHeight / 8


webgazer
    .setGazeListener((data, time) => {
        if (data == null || direction == "no") return

        if (data.x < left && direction !== "L" && direction != "Reset") {
            startTime = time
            direction = "L"
        } else if (data.x > right && direction !== "R" && direction != "Reset") {
            startTime = time
            direction = "R"
        } else if (data.x >= left && data.x <= right && data.y >= up && data.y <= down) {
            startTime = time = Number.POSITIVE_INFINITY
            direction = null
        } else if (data.y < up && direction !== "U" && direction != "Reset") {
            startTime = time
            direction = "U"
        } else if (data.y > down && direction !== "D" && direction != "Reset") {
            startTime = time
            direction = "D"
        }

        // if (start_tracking == true) {
        if (startTime + look_delay < time) {
            if (direction == "L" || direction == "U") {
                // image.classList.add("left")
                if (start_tracking == true) {
                    document.getElementById("pizza").src = "./PIZZAS/cheese/Raw_cheese_burnt.png";
                    pizza = "burnt"
                    stopCook()
                    flag = true;
                    console.log("LEFT")
                }
            } else if (direction == "R" || direction == "D") {
                // image.classList.add("right")
                if (start_tracking == true) {
                    document.getElementById("pizza").src = "./PIZZAS/cheese/Raw_cheese_burnt.png";
                    pizza = "burnt"
                    stopCook()
                    flag = true;
                    console.log("RIGHT")
                }
            }
            startTime = Number.POSITIVE_INFINITY
            direction = "no"
            setTimeout(() => {
                // image.remove()
                // nextImageElement.classList.remove('next')
                // image = nextImageElement
                // nextImageElement = getredImage(true)
                direction = "Reset"
            }, 200)
        }

        // } //if true

    })
    .begin()

// function getredImage(next = false) {
//     const img = document.createElement("img")
//         // img.src = "https://picsum.photos/1000?" + Math.random()
//     img.src = "red.png"
//     if (next) img.classList.add("next")
//     document.body.append(img)
//     return img
// }



// function getImage(next = false) {
//     const img = document.createElement("img")
//         // img.src = "https://picsum.photos/1000?" + Math.random()
//     img.src = "green-box-hi.png"
//     if (next) img.classList.add("next")
//     document.body.append(img)
//     return img
// }
function stopCook() {
    var hand1 = document.getElementById("clk");
    var hand2 = document.getElementById("clk2");
    hand1.style.animationPlayState = 'paused';
    hand2.style.animationPlayState = 'paused';
    // alert("YIKES! You got distracted and burned the pizza!");
    burnt = true
}