const pages = ["home", "projects", "photos", "artgallery", "links"];
const titles = [
  "hello world",
  "digital creations",
  "ventures",
  "art",
  "blue text"
];

function setContent(index) {
  const page = pages[index];
  const title = titles[index];

  //change content
  fetch(`${page}.html`)
    .then(res => res.text())
    .then(html => {
      document.getElementById("ie-content").innerHTML = html;
    })
    .catch(err => {
      document.getElementById("ie-content").innerHTML = "<p>Error loading content.</p>";
      console.error(err);
    });

  //change window header
  document.querySelector(".ie-title").innerHTML = `${title}`;
}

// Load home page on startup
setContent(0);