require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// -------------------- CORS --------------------
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "https://adbliss.tech",
    ],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  })
);

app.use(express.json());

// -------------------- MONGO CONNECTION --------------------
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Error:", err));

// -------------------- SCHEMA --------------------
const LenovoFormSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    company: { type: String, required: true },
    industry: { type: String, required: true },
    jobLevel: { type: String, required: true },
    jobTitle: { type: String, required: true },
    city: { type: String, required: true },
    ageConfirmed: { type: Boolean, required: true },
    consent: { type: Boolean, required: true },
    submittedAt: { type: Date, default: Date.now },
  },
  { collection: "lenovo-aura" }
);

const LenovoForm = mongoose.model("LenovoAura", LenovoFormSchema);

// -------------------- ROUTE --------------------
app.post("/lenovo-api/lenovo-aura-form", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      industry,
      jobLevel,
      jobTitle,
      city,
      ageConfirmed,
      consent,
    } = req.body;

    // ✅ Basic validation
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !company ||
      !industry ||
      !jobLevel ||
      !jobTitle ||
      !city
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (!ageConfirmed || !consent) {
      return res
        .status(400)
        .json({ message: "Please accept terms and confirm age" });
    }

    // ✅ Save to DB
    const entry = new LenovoForm(req.body);
    await entry.save();

    res.status(200).json({
      success: true,
      message: "Form submitted successfully!",
    });
  } catch (err) {
    console.error("❌ Save Error:", err);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

// -------------------- HEALTH CHECK --------------------
app.get("/", (req, res) => {
  res.send("API Running 🚀");
});

// -------------------- START SERVER --------------------
const PORT = process.env.PORT || 5004;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
