const mongoose = require("mongoose"); // database URIs
const express = require("express");
const app = express();

require('dotenv').config();
const port = process.env.PORT || 5000;


app.get("/", (req, res) => {
  res.send("Hello World");
});

const authRouter = require("./routes/auth");
const fileRouter = require("./routes/fileUpload");

mongoose
  .connect(
    'mongodb+srv://whitefeather:kuchabhi@cluster0.dnero.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  ).then(() => {
    console.log("Database connection was successful...");
  }).catch((err) => {
    console.log(err.message);
  });

// on connection and disconnection operations
mongoose.connection.on("connected", () => {
  console.log("Database connected!");
});

mongoose.connection.on("error", (err) => {
  console.log("unable to connect to database!");
  console.log(err.message);
});

mongoose.connection.on("disconnected", () => {
  console.log("Database disconnected!");
});

process.on("SIGNIN", async () => {
  await mongoose.connection.close();
  process.exit(0);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/auth", authRouter);
app.use("/uploadFile", fileRouter);


app.listen(port, () => console.log("Example app listening on port 5000!"));
