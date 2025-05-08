let albums = [];

fetch('assets/data/albums.json')
  .then(res => res.json())
  .then(data => {
    albums = data;
    renderAlbumGrid();
  });

function renderAlbumGrid() {
  const grid = document.getElementById('albumGrid');

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

// Modal population
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
    <p>${album.extra}</p>
    <ul class="list-inline">
      ${album.credits.map(c => `<li>${c}</li>`).join('')}
      <p></p>
      <li>${album.releaseDate}</li>
      <p></p>
      <li>
        <iframe src="${album.spotify}" width="100%" height="205" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </li>
    </ul>
    <button class="btn btn-primary" data-dismiss="modal" type="button">
      <i class="fas fa-times mr-1"></i> Close
    </button>
  `;
});
