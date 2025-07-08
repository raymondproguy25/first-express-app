// Import the Express.js framework
import express  from 'express';

// Create an instance of the Express app
const app = express();

// Define the port number for the server to listen on
const port = 3000;

/**
 * Root route handler: Returns a "Hello World" message
 * @param {object} req - The HTTP request object
 * @param {object} res - The HTTP response object
 */
app.get('/', (req, res) => {
  // Send a response with the "Hello World" message
  res.send('Hello World!');
});

/**
 * Start the server and listen on the specified port
 */
app.listen(port, () => {
  // Log a message to the console indicating the server has started
  console.log(`Server started on port ${port}`);
});
