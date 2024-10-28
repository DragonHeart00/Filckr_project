const { searchFlickrPhotos } = require('../services/flickrService');

const searchPhotos = async (req, res) => {
    const { query, page = 1 } = req.query;

    if (!query) {
        console.log('Search query is missing.');
        return res.status(400).json({ error: 'Search query is required' });
    }

    try {
        const photos = await searchFlickrPhotos(query, page);
        console.log('Photos fetched successfully:', photos);
        res.json(photos);
    } catch (error) {
        console.error('Error fetching from Flickr:', error.message);
        res.status(500).json({ error: 'Failed to fetch data from Flickr' });
    }
};

module.exports = {
    searchPhotos,
};
