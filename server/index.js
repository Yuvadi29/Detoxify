const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoutes = require("./routes/user.routes");
const topicRoutes = require("./routes/topics.routes");
const youtubeRoutes = require("./routes/youtube.routes");

dotenv.config();

const app = express();
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/topics', topicRoutes);
app.use('/youtube', youtubeRoutes);

const PORT = process.env.PORT || 5000;


mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('Connected to Database Successfully'))
    .catch((error) => console.log("Error connecting to Database: ", error));

app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`);
});