const express = require('express');
const axios = require('axios');
const User = require('../models/User');

const getVideos = async (req, res) => {
    const userId = req.userId;

    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const topicQueries = user.selectedTopics.map(topic => `q=${encodeURIComponent(topic)}`).join('&');

        const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?${topicQueries}&part=snippet&type=video&key=${process.env.YOUTUBE_API_KEY}`);

        res.status(200).json(response.data);

    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};

module.exports = { getVideos }