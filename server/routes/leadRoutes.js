const express = require("express");

const {
  createLead,
  getLeads,
  updateLeadStatus,
} = require("../controllers/leadController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Protected Routes
router.post("/", protect, createLead);
router.get("/", protect, getLeads);

// Admin updates consultation request status
router.put("/:id", protect, updateLeadStatus);

module.exports = router;