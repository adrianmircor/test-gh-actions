const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.json({
    status: "ok",
    code: 200 
  })
})

module.exports = app
