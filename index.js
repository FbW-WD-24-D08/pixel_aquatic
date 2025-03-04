const frames = [   
    "><(((('>",
    " ><(((('>",
    "  ><(((('>",
    "   ><(((('>",
    "    ><(((('>",
    "     ><(((('>",
    "      ><(((('>",
    `
    ~~~~~~~~~~~~~~~~~~~~~
    ~        ><(((('>    ~
    ~   ><(((('>         ~
    ~~~~~~~~~~~~~~~~~~~~~
    `,
    `
    ~~~~~~~~~~~~~~~~~~~~~
    ~   ><(((('>         ~
    ~        ><(((('>    ~
    ~~~~~~~~~~~~~~~~~~~~~
    `
];

let index = 0;
function animateAquarium(){ 
    document.querySelector("#aquarium").innerText = frames[index]; // Ändert den Text im <div>
    index = (index + 1) % frames.length; // Nimmt das nächste Frame (wieder von vorne, wenn am Ende)
    setTimeout(animateAquarium, 300); // Ruft sich selbst nach 200ms erneut auf
}

animateAquarium();