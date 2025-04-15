const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.set("Content-Type", "text/plain");
  res.send("Hello from hackwhiz – Subdomain Takeover Proof");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Running PoC");
});
