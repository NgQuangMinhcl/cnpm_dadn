const express = require("express");
const path = require("path");
const cors = require("cors");

const db = require("./config/db_connect");
const user_router = require("./router/user_router");
const date_router = require("./router/date_router");

const app = express();
db.connectDB();

// app.use('/public', express.static(path.join(__dirname, '/public'))); // use this to access static files in public folder

app.use(express.json());
app.use(cors());
app.use("/api", user_router.router);
app.use("/api/date", date_router.router);

app.get("/", (req, res) => {
  const direction = path.join(__dirname, "./front_end/index.html");
  res.sendFile(direction);
});

app.listen(3000, () => console.log("Server started"));
