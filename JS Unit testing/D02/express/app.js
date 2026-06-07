const express = require("express");

const app = express();

app.use(express.json());

app.get("/users", (req, res) => {
  res.status(200).json({
    users: [
      {
        id: 1,
        name: "mazen",
        email: "mazen@test.com",
      },
      {
        id: 2,
        name: "raafat",
        email: "raafat@test.com",
      },
    ],
  });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "mazen" && password === "Mazen@2003") {
    return res.status(201).json({
      message: "login success",
      token: "fake-jwt-token",
    });
  }

  res.status(401).json({
    message: "invalid username or password",
  });
});

module.exports = app;