async function loadMediaGallery() {
    try {
      const response = await fetch('assets/data/media.json');
      const data = await response.json();
      const gallery = document.getElementById('mediaGallery');
  
      const maxVisible = 3;
      let visibleCount = 0;
  
      // Create and append all media items, but hide initially
      data.images.forEach((imageName, index) => {
        const div = document.createElement('div');
        div.className = 'media-item';
        if (index >= maxVisible) div.classList.add('hidden');
  
        div.innerHTML = `
          <a href="assets/img/media/${imageName}" data-lightbox="band-gallery" data-title="${imageName}">
            <img src="assets/img/media/${imageName}" alt="${imageName}" />
          </a>
        `;
        gallery.appendChild(div);
      });
  
      visibleCount = maxVisible;
  
      if (data.images.length > visibleCount) {
        const btn = document.createElement('button');
        btn.textContent = 'Show More';
        btn.className = 'show-more-btn';
  
        btn.addEventListener('click', () => {
          const hiddenItems = gallery.querySelectorAll('.media-item.hidden');
          for (let i = 0; i < 3 && i < hiddenItems.length; i++) {
            hiddenItems[i].classList.remove('hidden');
          }
  
          visibleCount += 3;
  
          if (visibleCount >= data.images.length) {
            btn.textContent = 'Show Less';
          } else {
            btn.textContent = 'Show More';
          }
  
          // Toggle back to hidden if fully shown
          if (visibleCount >= data.images.length && btn.textContent === 'Show Less') {
            btn.addEventListener('click', () => {
              const allItems = gallery.querySelectorAll('.media-item');
              allItems.forEach((item, index) => {
                if (index >= maxVisible) item.classList.add('hidden');
              });
              visibleCount = maxVisible;
              btn.textContent = 'Show More';
            }, { once: true });
          }
        });
  
        gallery.parentElement.appendChild(btn);
      }
    } catch (error) {
      console.error('Error loading media gallery:', error);
    }
  }
  