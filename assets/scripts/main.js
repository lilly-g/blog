const options = [
  "Content for home",
  "Diary entries go here",
  "Books list or info",
  "Movies info",
  "Links list"
];

function setContent(index) {
  document.querySelector(".ie-content.scroll").innerHTML = options[index];
}

//load home page on startup
setContent(0);