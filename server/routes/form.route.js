const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const form = require("../models/form.model.js")
// Route for handling form submission
router.post("/submit-form", async (req, res) => {
  const { fullName, email, phone, course } = req.body;

  if (!fullName || !email || !phone || !course) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const formData = new form({
      fullName,
      email,
      phone,
      course,
    });
  
    await formData.save(); // Save the form data to the database
  
    return res.status(201).json({
      message: "Form submitted successfully!",
      data: formData,
    });
  
  } catch (error) {
    console.error("Error processing form submission:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
  
});

module.exports = router;
