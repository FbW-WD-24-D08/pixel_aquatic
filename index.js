const frames = [   
    "><(((('>",
    " ><(((('>",
    "  ><(((('>",
    "   ><(((('>",
    "    ><(((('>",
    "     ><(((('>",
    "      ><(((('>"
];

let index = 0;
function animateAquarium(){ 
    document.querySelector("#aquarium").innerText = frames[index].join("\n"); // Ändert den Text im <div> und .join("\n") zeigt mehrere Zeilen an.
    index = (index + 1) % frames.length; // Nimmt das nächste Frame (wieder von vorne, wenn am Ende)
    setTimeout(animateAquarium, 200); // Ruft sich selbst nach 200ms erneut auf
}

animateAquarium();