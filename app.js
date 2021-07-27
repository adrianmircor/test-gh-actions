const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.json({
    status: "ok-queda",
    code: 200 
  })
})

module.exports = app
