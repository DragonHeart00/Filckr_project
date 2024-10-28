require('dotenv').config();
const express = require('express');
const cors = require('cors');
const photoRoutes = require('./src/routes/photoRoutes');

const app = express();
const PORT = process.env.PORT || 3000;



app.use(cors());
app.use(express.json());

// Use the photo routes
app.use('/api/photos', photoRoutes);


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
