var id;
const libraryURL = window.location.href;
let title = document.querySelector("#title");

const usp = new URLSearchParams(libraryURL);

for (const [_, value] of usp){
  id = value;
}

title.innerText = id; 

