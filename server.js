import express from "express";
const app = express();
// Middleware
app.use(express.json());
const port = process.env.PORT || 5000;
// Route
app.get("/", (req, res) => {
 res.send("Welcome to my first Express app");
});
// Start server
app.listen(port, () => { 
  console.log(`Server running on port ${port}`);
});
