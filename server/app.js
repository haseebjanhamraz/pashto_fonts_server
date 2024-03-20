const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON requests

// Define the directory path to read
const directoryPath = path.join(__dirname, "public", "../../public/fonts");

// Endpoint to read the directory and send data to frontend
app.get("/fonts", (req, res) => {
  // Read the directory
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error("Error reading directory:", err);
      return res.status(500).json({ error: "Error reading directory" });
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

// Contact form route
app.use("/api/contact", contactRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
