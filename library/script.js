var index;
var card;
let shown = false;
const cards = ["nature", "characters", "paintings", "renders"];
let body = document.querySelector("#body");
let title = document.querySelector("#title");

const images = [
  {"HELLO":"HMMM"},
  {
    path:"../assets/characters/",
    mobileImages:["spiderman.jpg", "kakashiHatake.jpg", "dragonballz.jpg"],
    desktopImages:["aoashi.jpg", "kakashiHatake.jpg", "spiderman.jpeg"],
  },
]

const libraryURL = window.location.href;
const usp = new URLSearchParams(libraryURL);

for (const [_, value] of usp){
  index = value;
}

title.innerText = cards[index]; 

function showImages(){
  card = images[index];

  // for (let i = 0; i < card.mobileImages.length; i++){
  //   body.innerHTML += `<div class='card'><img src=${card.path}mobile/${card.mobileImages[i]} width=270 height=600></div>`;
  // }
  //
  // for (let i = 0; i < card.desktopImages.length; i++){
  //   body.innerHTML += `<div class='card'><img src=${card.path}desktop/${card.desktopImages[i]} width=540 height=360></div>`;
  // }

  let i = 0;
  let totalImages = card.desktopImages.concat(card.mobileImages);
  let desktopImages = card.desktopImages.length;

  while (true){
    index = Math.floor(Math.random() * totalImages.length);
    
    console.log("---------------------");
    console.log(index);
    console.log(desktopImages);

    if (index >= desktopImages){
      console.log("mobile")
      body.innerHTML += `<div class='card'><img src=${card.path}mobile/${totalImages[index]} width=270 height=600></div>`;
      totalImages.splice(index,1)
    } else {
      console.log(`desktop ${index}|${desktopImages}`);
      body.innerHTML += `<div class='card'><img src=${card.path}desktop/${totalImages[index]} width=540 height=360></div>`;
      totalImages.splice(index,1)
      desktopImages --;
    }

    if (i >= card.desktopImages.concat(card.mobileImages).length - 1){
      break
    }

    i ++;
  }
}

showImages();

