let selected = [];
const cards = ["nature", "characters", "paintings", "renders"];

const libraryLink = document.querySelector("#library");
const slideShowLink = document.querySelector("#slideShow");

function select(index){
  const card = document.querySelector(`#${cards[index]}`);

  selectedIndex = selected.indexOf(cards[index]);
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


function updateHref(){
  if (selected.length != 1){
    return;
  }

  libraryLink.href = `library/libraryTemplate.html?id=${selected[0]}`;
}
