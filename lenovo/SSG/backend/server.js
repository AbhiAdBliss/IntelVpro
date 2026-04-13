require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();

// -------------------- CORS --------------------
// Updated to ensure it accepts requests from your production and local environments
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

app.use("/files", express.static(path.join(__dirname, "files")));
// -------------------- MONGO CONNECTION --------------------
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected for Lenovo SSG"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

// -------------------- SCHEMA --------------------
// This matches exactly the 'form' state in your React component
const LenovoSsgSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    company: { type: String, required: true },
    industry: { type: String, required: true },

// ✅ ADD THESE
department: { type: String, required: true },
companySize: { type: String, required: true },
requirement: { type: String, required: true },

jobTitle: { type: String, required: true },
    ageConfirmed: { type: Boolean, required: true },
    consent: { type: Boolean, required: true },
    submittedAt: { type: Date, default: Date.now },
  },
  { collection: "lenovo-ssg" } // Unique collection name for this campaign
);

const LenovoSsgForm = mongoose.model("LenovoSsg", LenovoSsgSchema);

// -------------------- ROUTE --------------------
// This matches the endpoint called in your React component: axios.post(`${API}/lenovo-api/lenovo-aura-form`, form);
app.post("/lenovo-api/lenovo-ssg-form", async (req, res) => {
  try {
const {
  firstName,
  lastName,
  email,
  phone,
  company,
  industry,
  department,
  jobTitle,   // ✅ ADD THIS
  companySize,
  requirement,
  ageConfirmed,
  consent,
} = req.body;

if (
  !firstName ||
  !lastName ||
  !email ||
  !phone ||
  !company ||
  !industry ||
  !department ||
  !jobTitle ||     // ✅ ADD
  !companySize ||
  !requirement
) {
  return res.status(400).json({ message: "Missing required fields." });
}

    if (!ageConfirmed || !consent) {
      return res.status(400).json({ message: "Checkbox required" });
    }

const newLead = new LenovoSsgForm({
  firstName,
  lastName,
  email,
  phone,
  company,
  industry,
  department,
  jobTitle,
  companySize,
  requirement,
  ageConfirmed,
  consent,
});

    await newLead.save();

    // ✅ SEND PDF
   const filePath = path.join(
  __dirname,
  "files",
  "AI-Enabled-Workforce-Solution-Guide-ww-en.pdf"
);
    res.download(filePath, "AI-Enabled-Workforce-Solution-Guide-ww-en.pdf");

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// -------------------- HEALTH CHECK --------------------
app.get("/", (req, res) => {
  res.send("Lenovo SSG API is live and running 🚀");
});

// -------------------- START SERVER --------------------
const PORT = process.env.PORT || 5005;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🔗 Endpoint ready at http://localhost:${PORT}/lenovo-api/lenovo-ssg-form`);
});