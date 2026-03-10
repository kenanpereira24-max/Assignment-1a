const express = require("express");
const cors = require("cors");
const pool = require("./config/db");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/apply", async (req, res) => {
  const { founder_name, startup_name, email, category, pitch_deck_link } =
    req.body;
  try {
    const result = await pool.query(
      "INSERT INTO applications (founder_name, startup_name, email, category, pitch_deck_link) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [founder_name, startup_name, email, category, pitch_deck_link],
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/partner", async (req, res) => {
  const { organization_name, contact_person, email, interest_area } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO partners (organization_name, contact_person, email, interest_area) VALUES ($1, $2, $3, $4) RETURNING *",
      [organization_name, contact_person, email, interest_area],
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
