const pages = ["home", "diary", "books", "artgallery", "links"];
const titles = [
  "new tab",
  "today, and yesterday, and the day before",
  "word consumption and regurgitation",
  "creations of the mind and hand",
  "blue text with a similarly described underline"
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