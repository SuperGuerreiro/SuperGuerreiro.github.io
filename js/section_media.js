async function loadMediaGallery() {
    try {
      const response = await fetch('assets/data/media.json');
      const data = await response.json();
      const gallery = document.getElementById('mediaGallery');
  
      data.images.forEach(imageName => {
        const div = document.createElement('div');
        div.className = 'media-item';
      
        div.innerHTML = `
          <a href="assets/img/media/${imageName}" data-lightbox="band-gallery" data-title="${imageName}">
            <img src="assets/img/media/${imageName}" alt="${imageName}" />
          </a>
        `;
        gallery.appendChild(div);
      });      
    } catch (error) {
      console.error('Error loading media gallery:', error);
    }
  }
  