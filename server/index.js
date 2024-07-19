const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoutes = require("./routes/user.routes");

dotenv.config();

const app = express();
app.use(express.json());
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 5000;


mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('Connected to Database Successfully'))
    .catch((error) => console.log("Error connecting to Database: ", error));

app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`);
});