async function fetchPhotos() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        const photos = await response.json();

        displayPhotos(photos);
    } catch (error) {
        console.error('Error fetching photos:', error);
    }
}

function displayPhotos(photos) {
    const photoContainer = document.getElementById('photoContainer');

    photos.forEach(photo => {
        const imgElement = document.createElement('img');
        imgElement.src = photo.url;
        imgElement.alt = photo.title;

        photoContainer.appendChild(imgElement);
    });
}

// Fetch and display photos on page load
fetchPhotos();
