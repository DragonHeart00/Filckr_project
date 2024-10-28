import { PhotoModel } from './model.js';
import { PhotoView } from './view.js';

export const PhotoController = {
    currentPage: 1,
    currentQuery: '',

    init() {
        const searchButton = document.getElementById('search-button');
        const searchInput = document.getElementById('search');

        searchButton.addEventListener('click', async () => {
            const query = searchInput.value.trim(); // Trim whitespace
            if (!query) {
                PhotoView.showEmptyMessage('Please enter a search term.'); // Show message for empty input
                return;
            }

            this.currentQuery = query; // Save the current query
            this.currentPage = 1; // Reset to first page

            PhotoView.displayLoading(true);
            PhotoView.clearGallery();
            PhotoView.toggleLoadMoreButton(false); // Hide Load More button
            PhotoView.clearEmptyMessage(); // Clear previous empty message

            try {
                await this.loadPhotos();
            } catch (error) {
                PhotoView.showError(error);
            } finally {
                PhotoView.displayLoading(false);
            }
        });

        // Clear the gallery when the input is cleared
        searchInput.addEventListener('input', () => {
            const query = searchInput.value.trim();
            if (!query) {
                this.clearGalleryAndMessages(); // Clear gallery and messages
            }
        });

        const loadMoreButton = document.getElementById('load-more');
        loadMoreButton.addEventListener('click', async () => {
            try {
                await this.loadPhotos();
            } catch (error) {
                PhotoView.showError(error);
            }
        });
    },

    clearGalleryAndMessages() {
        PhotoView.clearGallery(); // Clear the photo gallery
        PhotoView.clearEmptyMessage(); // Clear any empty message
        PhotoView.toggleLoadMoreButton(false); // Hide Load More button
    },

    async loadPhotos() {
        PhotoView.displayLoading(true);

        const data = await PhotoModel.fetchPhotos(this.currentQuery, this.currentPage);
        if (data.photos && data.photos.photo && data.photos.photo.length > 0) {
            PhotoView.displayPhotos(data.photos.photo);
            this.currentPage++; // Increment page after loading photos
            PhotoView.toggleLoadMoreButton(true); // Show Load More button
        } else {
            PhotoView.showEmptyMessage('No results found.'); // Show message if no results
        }

        PhotoView.displayLoading(false);
    }
};
