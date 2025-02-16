const express = require("express");
const cors = require("cors");
const exam = require("./connection/database"); // Import the Mongoose model

const app = express();
const PORT = 4000;

// Use CORS to allow requests from other origins
app.use(cors({
    origin: "*", // Allow all origins (replace "*" with specific origin(s) for production)
    methods: ["GET"], // Specify allowed HTTP methods
}));

// Define the /exams endpoint
app.get('/exams', async (req, res) => {
    try {
        console.log("Fetching exams...");
        const data = await exam.find({}, { _id: 0 }); // Fetch all documents, exclude `_id` field
        console.log("Fetched exams:", await data);
        res.json(await data); // Send the data as a JSON response
    } catch (error) {
        console.error("Error fetching exams:", error);
        res.status(500).json({ error: "Internal Server Error" }); // Send error response
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});
