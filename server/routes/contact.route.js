const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const contact = require("../models/contact.model.js")
// Route for handling form submission
router.post("/submit-contact-form", async (req, res) => {
  const { fullName, email, phoneNumber, message } = req.body;

  if (!fullName || !email || !phoneNumber || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const formData = new contact({
      fullName,
      email,
      phoneNumber,
      message,
    });
  
    await formData.save(); // Save the form data to the database
  
    return res.status(201).json({
      message: "Message Sent successfully!",
      data: formData,
    });
  
  } catch (error) {
    console.error("Error processing form submission:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
  
});

module.exports = router;
