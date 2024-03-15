const express = require("express");
const fs = require("fs");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors()); // Add this line to enable CORS

// Define the directory path to read
const directoryPath = path.join(__dirname, "public", "../../public/fonts");

// Endpoint to read the directory and send data to frontend
app.get("/fonts", (req, res) => {
  // Read the directory
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error("Error reading directory:", err);
      res.status(500).json({ error: "Error reading directory" });
      return;
    }

    // Filter out only font files
    const fontFiles = files.filter((file) => {
      const filePath = path.join(directoryPath, file);
      return (
        fs.statSync(filePath).isFile() && /\.(ttf|otf|woff|woff2)$/i.test(file)
      );
    });

    // Send the font files array to the frontend
    res.json(fontFiles);
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
