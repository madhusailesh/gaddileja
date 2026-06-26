const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

connectDB();

const app = express();

const bikeRouts = require('./routes/bikeRouts');
connectDB();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Gaddileja API Running");
});

app.use(
    "/api/auth",
    authRoutes
);
app.use("/api/bikes", bikeRouts);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});