const emojis = [
    "🙉",
    "🙉",
    "🐶",
    "🐶",
    "🐺",
    "🐺",
    "🐱",
    "🐱",
    "🦁",
    "🦁",
    "🐯",
    "🐯",
    "🦒",
    "🦒",
    "🦝",
    "🦝",
];
let openCars = [];

let shuffleEmojis = emojis.sort( () => (Math.random() > 0.5 ? 2 : -1));


for (let i=0; i < emojis.length; i++)
{
    let box = document.createElement
    ("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(" .game").
    appendChild(box);
}

function handleClick() {
    if(openCars.length <2) {
        this.classList.add("boxOpen");
        openCars.push(this);
    }

    if(openCars.length == 2) {
        setTimeout(checkMath, 500);
    }

    console.log(openCars);
}

function checkMath() {
    if(openCars[0].innerHTML === openCars[1].innerHTML) {
        openCars[0].classList.add ("boxMatch");
        openCars[1].classList.add ("boxMatch");
    } else{
        openCars[0].classList.remove ("boxOpen");
        openCars[1].classList.remove ("boxOpen");
    }

    openCars = [];

    if(document.querySelectorAll(".boxMatch").length === emojis.length) {
        alert("Você venceu !");
    }
}