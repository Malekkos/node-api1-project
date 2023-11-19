// BUILD YOUR SERVER HERE
const express = require("express");
const server = express()
const User = require("./users/model")

server.use(express.json())

server.post("/api/users", async (req, res) => {
  // console.log("this is the request body: ", req.body, "this is the response params: ", res.params)
  // res.status(200).json({ message: "hello, world"})
  try {
    const { id, name, bio } = req.body // Does need an id?
    if(!name || !bio) {
      res.status(400).json({ //needs to be 400, not 422
        message: "Please provide name and bio for the user"
      })  
    } else {
    const createdUser = await User.insert({ name, bio }) //expects only name and bio, creates its own ID
    // console.log(id, name, bio) // works
    console.log(createdUser)
    res.status(201).json(createdUser)
  }
  } catch {
    res.status(500).json({
      message: "There was an error while saving the user to the database"
    })
  }
})






module.exports = server; // EXPORT YOUR SERVER instead of {}///
