const fishes = [   
    "><(((('>",
    "><((('>",
    "><(())°>",
    "><(((0>",
    "><(()'>",
    "><((()*>",
    "><(()(°>",
    "><(())°>--",
//     `
//     |\
//     |  \
// |\ /    .\
// | |       (
// |/ \     /
//     |  /
//     |/ `
];
const lobsters = [    '\n                            ,.---.   \n               ,,,,     /    _ `.\n                \\\\   /      \\  )\n                 |||| //`-.__/\n                 :::::/_\n {{`-.__.-\'(`(^^(^^^(^ 9 `.=========\'\n{{{{{{ { ( ( (  (   (-----:=\n {{.-\'~~\'-.(,(,,(,,,(__6_.=========.\n                 ::::/ \n                 |||| /  ,-\'/\\\n                 ///  \\ _/  )\n               \'\'\'\'     \\  `   /\n                         ---\'\'\n    '];
const krakens = [`
    _                      _______                      _
 _dMMMb._              .adOOOOOOOOOba.              _,dMMMb_
dP'  ~YMMb            dOOOOOOOOOOOOOOOb            aMMP~  'Yb
V      ~"Mb          dOOOOOOOOOOOOOOOOOb          dM"~      V
         'Mb.       dOOOOOOOOOOOOOOOOOOOb       ,dM'
          'YMb._   |OOOOOOOOOOOOOOOOOOOOO|   _,dMP'
     __     'YMMM| OP'~"YOOOOOOOOOOOP"~'YO |MMMP'     __
   ,dMMMb.     ~~' OO     'YOOOOOP'     OO '~~     ,dMMMb.
_,dP~  'YMba_      OOb      'OOO'      dOO      _aMMP'  ~Yb._
            'YMMMM\`OOOo     OOO     oOOO'/MMMMP'
    ,aa.     '~YMMb 'OOOb._,dOOOb._,dOOO'dMMP~'       ,aa.
  ,dMYYMba._         'OOOOOOOOOOOOOOOOO'          _,adMYYMb.
 ,MP'   'YMMba._      OOOOOOOOOOOOOOOOO       _,adMMP'   'YM.
 MP'        ~YMMMba._ YOOOOPVVVVVYOOOOP  _,adMMMMP~       'YM
 YMb           ~YMMMM\`OOOOI''''''IOOOOO'/MMMMP~           dMP
  'Mb.           'YMMMb'OOOI,,,,,IOOOO'dMMMP'           ,dM'
    ''                  'OObNNNNNdOO'                   ''
                          '~OOOOO~'
   `
];

const aquarium = document.querySelector("#aquarium");


// Creates Fish at a random Postition
function createFish(){
    const fish = document.createElement("div");
    fish.classList.add("fish");
    fish.innerText = fishes[Math.floor(Math.random() * fishes.length)];

    fish.style.top = Math.random() * window.innerHeight + "px";
    fish.style.left = -50 + "px"; // Starts left

    document.body.appendChild(fish);
    console.log("Neuer Fisch erstellt:", fish.innerText, fish.style.top);
    animateFish(fish);
};

// Function: moves Fish from left to right

function animateFish(fish){
    let speed = Math.random() * 7 + 1; // random speed
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

// Creates a new Fish ervery second
setInterval(createFish, 1000);


function createLobster(){
    const lobster = document.createElement("div");
    lobster.classList.add("lobster");
    lobster.innerText = lobsters[Math.floor(Math.random() * lobsters.length)];

    lobster.style.top = Math.random() * window.innerHeight + "px";
    lobster.style.left = -50 + "px"; // Starts left also

    document.body.appendChild(lobster);
    console.log("Neuer Hummer erstellt", lobster.innerText, lobster.style.top);
    animateLobster(lobster);
};

function animateLobster(lobster){
    let speed = Math.random() * 3 + 1;
    let position = -50;

    function move(){
        position += speed;
        lobster.style.left = position + "px";

        if(position > window.innerWidth){
            lobster.remove();
        }else{
            requestAnimationFrame(move);
        }
    }
    move();
};

setInterval(createLobster, 8000);