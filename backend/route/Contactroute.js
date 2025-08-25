const express = require("express");
const router = express.Router();
const Contact = require("../model/Contact");

// POST /api/contact
router.post("/contact", async (req, res) => {
  try {
    console.log("📩 Received Data:", req.body); // Debug log

    const contact = new Contact(req.body);
    await contact.save();

    res.status(201).json({ message: "Message sent successfully!" });
  } catch (err) {
    console.error("❌ Error saving contact:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
