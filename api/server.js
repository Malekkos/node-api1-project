// BUILD YOUR SERVER HERE
const express = require("express");
const server = express()

server.use(express.json())

server.post("/api/users", async (req, res) => {
  console.log("this is the request body: ", req.body, "this is the response params: ", res.params)
  // res.status(200).json({ message: "hello, world"})
  try {
    const { id, name, bio } = req.body
    // console.log(id, name, bio) // works
  } catch (err) {
    res.status(500).json({
      message: `Error creating dog:${err.message}`
    })
  }
})






module.exports = server; // EXPORT YOUR SERVER instead of {}///
