let biosVisible = false;  // Flag to track whether full bios is visible or hidden

async function loadBioData(lang = 'en') {
    try {
        const response = await fetch('assets/data/bio.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        const biosContainer = document.getElementById('biosContainer'); // Container for the bio

        if (data[lang]) {
            biosContainer.innerHTML = ''; // Clear any existing content

            // Loop through each bio item (we assume they are in format bio1, bio2, etc.)
            Object.keys(data[lang]).forEach((key, index) => {
                const bioText = data[lang][key];

                const bioElement = document.createElement('h3'); // Create a <h3> for each bio
                bioElement.classList.add('section-subheading', 'text-muted');  // Add a class to each bio to keep same style
                bioElement.id = `bio${index + 1}`;

                bioElement.textContent = bioText; // Set the bio text as the content

                // Append the bio to the container
                biosContainer.appendChild(bioElement);
            });
        } else {
            console.error('Language data not found:', lang);
        }
    } catch (error) {
        console.error('Failed to load bios:', error);
        alert("An error occurred while loading bios. Please check the console for details.");
    }
}

function toggleBios() {
    const biosContainer = document.getElementById('biosContainer');
    const toggleButton = document.getElementById('toggleBiosButton');

    if (biosVisible) {
        // If full bios visible, collapse them
        biosContainer.style.display = 'none';
        toggleButton.innerText = 'Read More';
    } else {
        // If full bios hidden, show them
        biosContainer.style.display = 'block';
        toggleButton.innerText = 'Show Less';
    }

    // Toggle the visibility flag
    biosVisible = !biosVisible;
}

window.onload = () => loadBioData('en');  // Load the bios on page load
