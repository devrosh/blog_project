const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/User");
const Post = require("./models/Post");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret_key = "secretkey";

const app = express();

//Middlewares
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

//ROUTES
app.post("/register", (req, res) => {
  //extracting the data from the request body
  const { firstName, lastName, email, password } = req.body;
  //checking if the user already exists
  User.findOne({ email: email }).then((user) => {
    if (user) {
      res.send({ message: "User already exists" });
    } else {
      //hashing the password
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(password, salt);
      //creating a new user
      const user = new User({
        firstName,
        lastName,
        email,
        password: hashedPassword,
      });
      user.save();
      res.status(200).send({ message: "User created successfully" });
    }
  });
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    //finding the user with the email and checking if the user exists
    const user = await User.findOne({ email: email });

    //comparing the  user password with the hashed password and checking if they match
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword && !user) {
      res.status(401).json({ message: "Invalid credentials" });
    } else {
      res.status(200).json({ message: "Logged in successfully" });
    }
    //creating a jwt token
    const token = jwt.sign({ id: user._id }, secret_key);
  } catch (err) {
    res.status(500).send({ message: "Error logging in" });
  }
});
// Create post route
app.post("/post/create", async (req, res) => {
  try {
    const { title, body: value } = req.body;
    const newPost = await new Post({
      title,
      body: value,
    });
    const result = await newPost.save();
    res.status(200).send({ message: "Post created successfully" });
  } catch (err) {
    res.status(500).send({ message: "Error creating post" });
  }
});
//Databse Connection
mongoose.connect(
  "mongodb://devrosh22:devrosh@ac-s30xdlz-shard-00-00.o0of1ws.mongodb.net:27017,ac-s30xdlz-shard-00-01.o0of1ws.mongodb.net:27017,ac-s30xdlz-shard-00-02.o0of1ws.mongodb.net:27017/?ssl=true&replicaSet=atlas-rlaibn-shard-0&authSource=admin&retryWrites=true&w=majority"
);

// Server Intilisation
app.listen(8080, () => {
  console.log("Server is running perfectly and smoothly on port 8080");
});
