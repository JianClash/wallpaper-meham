let selected = [];
const cards = ["nature", "characters", "paintings", "renders"];

const libraryLink = document.querySelector("#library");
const slideShowLink = document.querySelector("#slideShow");

let body = document.querySelector("#body");

function select(index){
  const card = document.querySelector(`#${cards[index]}`);

  selectedIndex = selected.indexOf(index);
  if (selectedIndex == -1){
    selected.push(index);
    card.style.backgroundColor = "Lightgreen"
  } else {

    selected.splice(selectedIndex, 1);
    card.style.backgroundColor = "#140d21";
  }


  if (selected.length > 0){
    slideShowLink.style.backgroundColor = "Lightgreen";
    slideShowLink.style.color = "black";
  } else {
    slideShowLink.style.backgroundColor = "#211d36"
    slideShowLink.style.color = "white"
  }


  if (selected.length == 1) {
    libraryLink.style.backgroundColor = "Lightgreen";
    libraryLink.style.color = "black";
  } else {
    libraryLink.style.backgroundColor = "#211d36";
    libraryLink.style.color = "white";
  }
}


function enterLibraryMode(){
  if (selected.length != 1){
    return;
  }

  libraryLink.href = `library/libraryTemplate.html?id=${selected[0]}`;
}

function enterSlideShowMode(){
  if (selected.length == 0){
    return;
  }

  // body.innerHTML += "<img id=test src=assets/characters/desktop/kakashiHatake.jpg>";
  // const test = document.querySelector("#test");
  // enterFullScreen(test);
}

function enterFullScreen(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  }else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();     // Firefox
  }else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();  // Safari
  }else if(element.msRequestFullscreen) {
    element.msRequestFullscreen();      // IE/Edge
  }
};

function exitFullscreen() {
  if(document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
};
