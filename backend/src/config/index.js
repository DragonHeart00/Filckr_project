require('dotenv').config();

const FLICKR_API_KEY = process.env.FLICKR_API_KEY;

if (!FLICKR_API_KEY) {
    throw new Error('FLICKR_API_KEY is not set');
}
module.exports = { FLICKR_API_KEY };
