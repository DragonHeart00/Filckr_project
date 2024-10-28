# Photo Gallery & REST API - Flickr Integration

This project is a photo gallery application that fetches images from Flickr's public API. It consists of a **Node.js REST API** for fetching data from Flickr and a **frontend gallery** that displays the images using Vanilla JavaScript.

---

## Table of Contents
- [Overview](#overview)
- [Requirements](#requirements)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Frontend Usage](#frontend-usage)
- [Error Handling](#error-handling)
- [Areas of Improvement](#areas-of-improvement)

---

## Overview

This project demonstrates how to create a simple **photo gallery** that uses a custom-built API to fetch images from Flickr. The API provides a RESTful interface, while the frontend consumes it to display the images. The gallery also has a **search functionality** and **pagination/infinite scroll** for loading more images.

---

## Requirements
- Photo Gallery Search
- Endless Scroll/Pagination
- Feedback Mechanism
- Responsiveness
- Search API
- API Key Integration
- Code Maintainability
- VanillaJS/No Frameworks
- Platform Constraints (Node js)
- Independent Component Design



---

## Tech Stack

- Backend: Node.js, Express
- Frontend: Vanilla JavaScript, HTML, CSS
- External API: Flickr API (for fetching images)

---
## Installation
### Backend (Node.js API)
1. unzip flickr.zip
2. cd flickr/backend
3. npm install
4. Set up environment variables
5. Create a .env file in the backend directory and add your Flickr API key:
- FLICKR_API_KEY=your_flickr_api_key


---
## Configuration
The API requires a Flickr API key, which you can obtain by creating an app at Flickr API. Add this key to your .env file in the backend.

---
## Running the Application

### Backend
To start the Node.js server
- npm run start

### Frontend
Open the index.html in the frontend directory using any browser.
The page will fetch data from the backend API and display the image gallery

---
## API Endpoints
### GET /api/photos/search
This endpoint retrieves photos from Flickr based on a search query.
1. Request
- GET /api/photos/search?query=cat

- query: (Required) The search term (e.g., "cat") to fetch relevant photos from Flickr.

2. Response
- Status 200 (OK)
### Example JSON Response


```json
{
  "photos": [
    {
      "id": "54087736636",
      "owner": "142629074@N04",
      "secret": "6321010ef5",
      "server": "65535",
      "farm": 66,
      "title": "[ CUTE AND COZY ]",
      "ispublic": 1,
      "isfriend": 0,
      "isfamily": 0
    },
    {
      "id": "540868804302",
      "owner": "57256462@N07",
      "secret": "fa03d3acbc",
      "server": "65535",
      "farm": 66,
      "title": "[ Another Title ]",
      "ispublic": 1,
      "isfriend": 0,
      "isfamily": 0
    }
  ]
}
```

---
## Frontend Usage
1. Search for Photos
- On the homepage, enter a search term in the search bar (e.g., mountains, beach), and press Enter.
- The page will display images related to the search term.

2. Pagination/Infinite Scroll
- After scrolling to the bottom of the page, more images will be load by press "Load more" button).

3. Error Feedback
- If the API is unresponsive or there are no results, an error message will be displayed.

---
## Error Handling
1. Flickr API Errors: If Flickr's API is unreachable or returns an error, the API will return a 500 status code with an appropriate error message.
2. User Feedback: The frontend will show loading indicators or error messages to keep the user informed.


---
## Areas of Improvement
- Caching: Currently, each search hits the Flickr API. Consider adding caching to reduce redundant requests.
- Testing: No automated tests are implemented. Unit and integration tests for both the API and frontend can be added.
- Security: The API key is stored in the .env file and not securely transmitted. Consider encrypting or using a more secure way to manage API keys.
- Performance: Add image lazy-loading on the frontend for better performance with large datasets.
