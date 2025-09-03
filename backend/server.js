const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

// Schema and Model
const intelVproSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  company: String,
  industry: String,
  jobLevel: String,
  jobTitle: String,
  city: String,
  ageConfirmation: Boolean,
  marketingAgreement: Boolean,
  createdAt: { type: Date, default: Date.now }
});

// ✅ Force the collection name to IntelVpro inside test DB
const IntelVpro = mongoose.model('IntelVpro', intelVproSchema, 'IntelVpro');

// API route
app.post('/api/submit', async (req, res) => {
  try {
    const data = req.body;
    const newEntry = new IntelVpro(data);
    await newEntry.save();
    res.status(200).json({ message: "Form submitted successfully!" });
  } catch (error) {
    console.error("❌ Error saving form data:", error);
    res.status(500).json({ message: "Server error" });
  }
});
app.listen(5000,"127.0.0.1", () => {
  console.log(`🚀 Server running on porthttp://127.0.0.1:5000}`);
});
