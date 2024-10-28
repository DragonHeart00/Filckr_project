const { createFlickr } = require('flickr-sdk');
const config = require('../config');

const { flickr } = createFlickr(config.FLICKR_API_KEY);

const searchFlickrPhotos = async (query, page) => {
    try {
        return await flickr('flickr.photos.search', {
            text: query,
            per_page: 10,
            page,
            format: 'json',
            nojsoncallback: 1,
        });
    } catch (error) {
        console.error('Error fetching data from Flickr:', error.message);
        throw error;
    }
};

module.exports = { searchFlickrPhotos };
