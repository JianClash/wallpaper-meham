let selected = [];
const cards = ["nature", "characters", "paintings", "renders"];

const libraryLink = document.querySelector("#library");
const slideShowLink = document.querySelector("#slideShow");
const track = document.querySelector("#cards");

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
}


window.onwheel = e => {
  const mouseWheelDirection = detectMouseWheelDirection(e);
  const nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage - mouseWheelDirection),
      nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

  track.dataset.percentage =  nextPercentage;


  track.animate({
    transform: `translate(${nextPercentage}%, -50%)`,
  }, {duration: 1200, fill: "forwards"});

  for (const image of track.getElementsByClassName("thumbnail")) {
    image.animate({
      objectPosition:`${nextPercentage + 100}% 50%`,
    }, {duration: 1200, fill: "forwards"});
  }

  track.dataset.prevPercentage = track.dataset.percentage;
}

window.onmousedown = e => {
  track.dataset.mouseDownAt = e.clientX;
}

window.onmouseup = e => {
  track.dataset.prevPercentage = track.dataset.percentage;
}


function detectMouseWheelDirection( e )
{
    var delta = null,
        direction = false;

    if ( e.wheelDelta ) { // will work in most cases
        delta = e.wheelDelta / 60;
    } else if ( e.detail ) { // fallback for Firefox
        delta = -e.detail / 2;
    }
    if ( delta !== null ) {
        direction = delta > 0 ? -5 : 5;
    }

    return direction;
}
