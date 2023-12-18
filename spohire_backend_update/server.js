const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 8000;

// routes
// const userRoutes = require("./modules/user/user.routes");

const app = express();
const http = require("http");
const Server = http.createServer(app);

// middleware
app.use(cors());


connectDB();

// routes
// app.use("/api/v1/users");


// testing api
app.get("/", (req, res) => {
  res.send("Server is running");
});

Server.listen(PORT, () => {
  console.log(`Server is Running PORT: ${PORT}`);
});
