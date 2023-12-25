const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 8000;

// routes
const bookingRoutes = require("./modules/booking/bookingRoutes");

const app = express();
const http = require("http");
const Server = http.createServer(app);

// middleware
app.use(cors());


connectDB();

// routes
// app.use("/api/v1/users");
app.use('/api', bookingRoutes);

// testing api
app.get("/", (req, res) => {
  res.send("Server is running");
});

Server.listen(PORT, () => {
  console.log(`Server is Running PORT: ${PORT}`);
});
