import express from "express";
import path from "path";

const app = express();

app.get("/login", (req, res) => {
  res.send("Login View");
});

app.post("/login", (req, res) => {
  res.send("Login Controller");
});

app.get("/logout", (req, res) => {
  res.send("Logout View");
});

app.get("/account", (req, res) => {
  res.send("User Data");
});

app.get("/dialog/authorize", (req, res) => {
  res.send("OAuth2 Authorization");
});

app.post("/dialog/authorize/decision", (req, res) => {
  res.send("OAuth2 Decision");
});

app.post("/oauth/token", (req, res) => {
  res.send("OAuth2 token");
});

app.get("/api/userinfo", (req, res) => {
  res.send("User Info");
});

app.get("/api/clientinfo", (req, res) => {
  res.send("Client Info");
});

app.listen(4000, () => console.log("OAUTH-DGIPJ ::::: 4000!"));
