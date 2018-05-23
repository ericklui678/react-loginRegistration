const express = require("express");
const path = require("path");
const app = express();

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/api/auth", (req, res) => {
  res.status(400).json({ errors: { global: "Invalid credentials" } });
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`running on port ${port}`));