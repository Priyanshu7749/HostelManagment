// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/gatepass', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Mongoose schema
const gatePassSchema = new mongoose.Schema({
  serialNumber: Number,
  name: String,
  block: String,
  roomNumber: String,
  college: String,
  program: String,
  time: String,
  phoneNumber: String,
  placeToGo: String,
  reason: String,
  date: { type: Date, default: Date.now }
});

const GatePass = mongoose.model('GatePass', gatePassSchema);

// POST endpoint to save form data
app.post('/api/gatepass', (req, res) => {
  const newGatePass = new GatePass(req.body);
  newGatePass.save()
    .then(() => res.json('Gate pass saved!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
