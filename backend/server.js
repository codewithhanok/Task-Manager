
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Test route
app.get('/', (req, res) => {
    res.send('Task Manager Backend is running!');
});

// Connect to MongoDB and then start the server
mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('MongoDB connected successfully!');

        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error('MongoDB connection failed:', error.message);
    });