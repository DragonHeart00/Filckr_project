export const PhotoView = {
    displayLoading(loading) {
        const loadingIndicator = document.getElementById('loading');
        loadingIndicator.style.display = loading ? 'block' : 'none';
    },

    clearGallery() {
        const photoGallery = document.getElementById('photo-gallery');
        photoGallery.innerHTML = ''; // Clear previous results
    },

    displayPhotos(photos) {
        const photoGallery = document.getElementById('photo-gallery');
        photos.forEach(photo => {
            const imgSrc = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
            const imgElement = document.createElement('div');
            imgElement.classList.add('photo');
            imgElement.innerHTML = `<img src="${imgSrc}" alt="${photo.title}">`;
            photoGallery.appendChild(imgElement);
        });
    },

    showError(error) {
        const photoGallery = document.getElementById('photo-gallery');
        const errorMessageElement = document.createElement('div');
        errorMessageElement.classList.add('error-message');
        errorMessageElement.textContent = `Error: ${error.message}`; // Display error message
        photoGallery.appendChild(errorMessageElement); // Append the error message to the gallery
    },

    toggleLoadMoreButton(show) {
        const loadMoreButton = document.getElementById('load-more');
        loadMoreButton.style.display = show ? 'block' : 'none'; // Show or hide the button
    },

    showEmptyMessage(message) {
        const photoGallery = document.getElementById('photo-gallery');
        const messageElement = document.createElement('div');
        messageElement.classList.add('empty-message');
        messageElement.textContent = message; // Set the message text
        photoGallery.appendChild(messageElement); // Append the message to the gallery
    },

    clearEmptyMessage() {
        const messageElement = document.querySelector('.empty-message');
        if (messageElement) {
            messageElement.remove(); // Remove the empty message if it exists
        }
    },

    clearErrorMessage() {
        const errorMessageElement = document.querySelector('.error-message');
        if (errorMessageElement) {
            errorMessageElement.remove(); // Remove the error message if it exists
        }
    }
};
