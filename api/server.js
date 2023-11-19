// BUILD YOUR SERVER HERE
const express = require("express");
const server = express()
const User = require("./users/model")

server.use(express.json())

server.post("/api/users", async (req, res) => {
  try {
    const { name, bio } = req.body
    if(!name || !bio) {
      res.status(400).json({
        message: "Please provide name and bio for the user"
      })  
    } else {
    const createdUser = await User.insert({ name, bio })
    res.status(201).json(createdUser)
  }
  } catch {
    res.status(500).json({
      message: "There was an error while saving the user to the database"
    })
  }
})
server.get("/api/users", async (req, res) => {
  try {
    const users = await User.find()
    res.status(200).json(users)
  } catch {
    res.status(500).json({
      message: "The users information could not be retrieved"
    })
  }
})
server.get("/api/users/:id", async (req, res) => {
  console.log("req.params", req.params, "res.body", res.body)
  try {
    const { id } = req.params
    const foundUser = await User.findById(id)
    if(!foundUser) {
      res.status(404).json({
        message: "The user with the specified ID does not exist"
      })
    } else {
    console.log(id)
    res.status(200).json(foundUser)
  }
  } catch {
    res.status(500).json({
      message: "The user information could not be retrieved"
    })
  }
})




module.exports = server; // EXPORT YOUR SERVER instead of {}///
