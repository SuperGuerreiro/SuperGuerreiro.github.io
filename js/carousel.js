fetch('assets/data/carousel.json')
  .then(response => response.json())
  .then(data => {
    const indicators = document.getElementById('carousel-indicators');
    const inner = document.getElementById('carousel-inner');

    data.forEach((slide, index) => {
      // Create indicator
      const indicator = document.createElement('li');
      indicator.setAttribute('data-target', '#home-carousel');
      indicator.setAttribute('data-slide-to', index);
      if (index === 0) indicator.classList.add('active');
      indicators.appendChild(indicator);

      // Create slide
      const item = document.createElement('div');
      item.className = 'carousel-item' + (index === 0 ? ' active' : '');
      item.innerHTML = `
        <div class="masthead" style="background-image: url('${slide.backgroundImage}');">
          <div class="container-home">
            <img class="logo" src="assets/img/logosmall.png" alt="Band Logo" />
            <div class="masthead-subheading">${slide.subheading}</div>
            <div class="masthead-heading text-uppercase">${slide.heading}</div>
            <a class="btn btn-outline-light btn-xl text-uppercase" href="${slide.buttonLink}" target="_blank">
              ${slide.buttonText}
            </a>
          </div>
        </div>
      `;
      inner.appendChild(item);
    });

    // Preload all carousel background images
    const preloadDiv = document.createElement('div');
    preloadDiv.style.display = 'none';
    data.forEach(slide => {
      const img = document.createElement('img');
      img.src = slide.backgroundImage;
      preloadDiv.appendChild(img);
    });
    document.body.appendChild(preloadDiv);

  })
  .catch(error => console.error('Error loading carousel data:', error));
