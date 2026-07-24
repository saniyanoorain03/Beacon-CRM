const Lead = require("../models/Lead");

// Create Lead
const createLead = async (req, res) => {
  try {
    const lead = await Lead.create({
      name: req.body.name,
      email: req.body.email,
      projectName: req.body.projectName,
      budget: req.body.budget,
      message: req.body.message,

      // Logged-in user becomes the owner
      user: req.user.id,
    });

    res.status(201).json(lead);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Leads
const getLeads = async (req, res) => {
  try {
    let leads;

    // Admin can see all consultation requests
    if (req.user.role === "admin") {
      leads = await Lead.find().sort({ createdAt: -1 });
    } else {
      // Normal user sees only their own requests
      leads = await Lead.find({
        user: req.user.id,
      }).sort({ createdAt: -1 });
    }

    res.json(leads);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update Lead Status (Admin Only)
const updateLeadStatus = async (req, res) => {
  try {
    // Allow only admins to update status
    if (req.user.role !== "admin") {
      return res.status(403).json({
        message: "Access denied. Admin only.",
      });
    }

    const lead = await Lead.findById(req.params.id);

    if (!lead) {
      return res.status(404).json({
        message: "Consultation request not found.",
      });
    }

    lead.status = req.body.status;

    const updatedLead = await lead.save();

    res.status(200).json(updatedLead);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createLead,
  getLeads,
  updateLeadStatus,
};