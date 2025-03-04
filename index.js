const fishes = [   
    "><(((('>",
    "><((('>",
    "><(())>",
    "><(((0>",
    "><(()'>",
    "><((()*>",
    "><(()(°>",
    "><(())°>--"
];

const aquarium = document.querySelector("#aquarium");


// Creates Fish at a random Postition
function createFish(){
    const fish = document.createElement("div");
    fish.classList.add("fish");
    fish.innerText = fishes[Math.floor(Math.random() * fishes.length)];

    fish.style.top = Math.random() * window.innerHeight + "px";
    fish.style.left = -50 + "px"; // Starts left

    aquarium.appendChild(fish);
    animateFish(fish);
};

// Function: moves Fish from right to left

function animateFish(fish){
    let speed = Math.random() * 3 + 1; // random speed
    let position = -50; // Starts left

function move(){
    position += speed;
    fish.style.left = position + "px";

    if(position > window.innerWidth) {
        fish.remove();
    }else{
        requestAnimationFrame(move);
    }
}
move();
};
