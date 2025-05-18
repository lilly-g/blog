const pages = ["home", "diary", "books", "artgallery", "links"];

function setContent(index) {
  const page = pages[index];

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
  document.querySelector(".ie-title").innerHTML = `${page}`;
}

// Load home page on startup
setContent(0);