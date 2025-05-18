const pages = ["home", "diary", "books", "artgallery", "links"];

function setContent(index) {
  const page = pages[index];

  fetch(`${page}.html`)
    .then(res => res.text())
    .then(html => {
      document.getElementById("ie-content").innerHTML = html;
    })
    .catch(err => {
      document.getElementById("ie-content").innerHTML = "<p>Error loading content.</p>";
      console.error(err);
    });
}

// Load home page on startup
setContent(0);