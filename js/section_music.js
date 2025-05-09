// Declare albums globally so it can be accessed by both rendering the grid and the modal logic
let albums = [];

//We need this because we're dynamically loading the content of music-section.html into the #music-container
fetch('music-section.html')
  .then(response => response.text())
  .then(data => {
    // Inject the music section HTML into the container
    document.getElementById('music-container').innerHTML = data;

    // Now, load the album data and render the grid
    loadAlbums();
  })
  .catch(error => console.error('Error loading music.html:', error));

// Function to load album data and render the grid
function loadAlbums() {
  fetch('assets/data/albums.json')
    .then(res => res.json())
    .then(data => {
      albums = data;
      renderAlbumGrid(albums);
    })
    .catch(error => console.error('Error loading albums:', error));
}


function renderAlbumGrid(albums) {
  const grid = document.getElementById('albumGrid');
  if (!grid) {
    console.error("Album grid element not found");
    return;
  }

  albums.forEach(album => {
    const col = document.createElement('div');
    col.className = 'col-lg-4 col-sm-6 mb-4';

    col.innerHTML = `
      <div class="portfolio-item">
        <a class="portfolio-link" data-toggle="modal" data-target="#albumModal" data-id="${album.id}">
          <div class="portfolio-hover"></div>
          <img class="img-fluid" src="${album.cover}" alt="${album.title}" />
        </a>
        <div class="portfolio-caption">
          <div class="portfolio-caption-heading">${album.title}</div>
          <div class="portfolio-caption-subheading text-muted">${album.year}</div>
        </div>
      </div>
    `;

    grid.appendChild(col);
  });
}

// Modal population - listen for clicks on album items to populate the modal itself
document.addEventListener('click', function (e) {
    const trigger = e.target.closest('[data-id]');
    if (!trigger || !trigger.dataset.target.includes('albumModal')) return;

    const id = trigger.getAttribute('data-id');
    const album = albums.find(a => a.id === id);
    if (!album) return;

    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = `
        <h2 class="text-uppercase">${album.title}</h2>
        <p class="item-intro text-muted">${album.year}</p>
        <img class="img-fluid d-block mx-auto" src="${album.cover}" alt="${album.title}" />
        <p>${album.description}</p>
        <p>${album.extraDescription}</p>

        <h5>Band Credits</h5>
        <ul class="list-inline">
        ${album.bandCredits.map(c => `<li>${c}</li>`).join('')}
        </ul>

        ${album.extraCredits.length ? `
        <h5>Guest & Extra Credits</h5>
        <ul class="list-inline">
            ${album.extraCredits.map(c => `<li>${c}</li>`).join('')}
        </ul>` : ''}

        ${album.productionCredits.length ? `
        <h5>Production Credits</h5>
        <ul class="list-inline">
            ${album.productionCredits.map(c => `<li>${c}</li>`).join('')}
        </ul>` : ''}

        <p><strong>${album.releaseDate}</strong></p>

        <div class="my-3">
        <iframe src="${album.spotify}" width="100%" height="205" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>

        <button class="btn btn-primary" data-dismiss="modal" type="button">
        <i class="fas fa-times mr-1"></i> Close
        </button>
    `;
});
