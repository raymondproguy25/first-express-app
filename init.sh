#!/bin/bash

Init npm
npm init

Install express
npm install express

Create files
mkdir routes
touch server.js .env .gitignore README.md routes/posts.js

Write .env
echo "PORT=5000" > .env

Write .gitignore
echo "node_modules/" > .gitignore
echo ".env" >> .gitignore

Add boilerplate to server.js
echo 'import express from "express";
const app = express();
app.use(express.json());
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));' > server.js

Git setup
git init
git add .
git commit -m "Initial setup with bash"

