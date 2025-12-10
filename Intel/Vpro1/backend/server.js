const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ----------- THE ONLY CORS FIX YOU NEED (Works in Express 4) -----------
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
    optionsSuccessStatus: 200,
  })
);

// Express handles OPTIONS automatically with this:
app.options("*", cors());

// Body parser
app.use(express.json());

// -------------------- MONGO CONNECTION --------------------
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err));

// -------------------- SCHEMA --------------------
const IntelFormSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  company: String,
  industry: String,
  jobLevel: String,
  jobTitle: String,
  city: String,
  ageConfirmed: Boolean,
  consent: Boolean,
  submittedAt: { type: Date, default: Date.now },
});

// Your collection name inside DB
const IntelForm = mongoose.model(
  "IntelVproModel",     
  IntelFormSchema, 
  "IntelVpro1"         
);



// -------------------- ROUTE --------------------
app.post("/api/intel-vpro-form", async (req, res) => {
  try {
    const entry = new IntelForm(req.body);
    await entry.save();

    res.json({ message: "Form submitted successfully!" });
  } catch (err) {
    console.log("Save Error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// -------------------- START SERVER --------------------
app.listen(process.env.PORT, () =>
  console.log(`Backend running at http://localhost:${process.env.PORT}`)
);
