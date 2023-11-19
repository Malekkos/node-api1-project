// BUILD YOUR SERVER HERE
const express = require("express");
const server = express()

server.use(express.json())

server.post("/api/users", (req, res) => {
  console.log("this is the request body: ", req.body, "this is the response: ", res.params)
  res.status(200).json({ message: "hello, world"})
})






module.exports = server; // EXPORT YOUR SERVER instead of {}///
