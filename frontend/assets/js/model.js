export const PhotoModel = {
    async fetchPhotos(query, page) {
        const encodedQuery = encodeURIComponent(query); // Ensure the query is URL-safe
        const url = `http://localhost:3000/api/photos/search?query=${encodedQuery}&page=${page}`; // Append page

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Error fetching photos: ${response.status} ${response.statusText}`);
            }
            return await response.json();
        } catch (error) {
            console.error("Failed to fetch photos:", error);
            throw error; // Rethrow the error for handling in the controller
        }
    }
};
