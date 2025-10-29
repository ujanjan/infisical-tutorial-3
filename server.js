import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

// ❌ BAD: Hardcoded secrets in source code
const API_KEY = "sk-1234567890abcdef";
const DB_PASSWORD = "mypassword123";
const JWT_SECRET = "super-secret-jwt-key";

app.get("/", (_req, res) => res.json({
  ok: true, 
  message: "Server running with hardcoded secrets",
  apiKey: API_KEY,
  dbPassword: DB_PASSWORD,
  jwtSecret: JWT_SECRET
}));

// 🎉 Easter egg: Hidden DevOps fact
app.get("/2827", (_req, res) => res.json({
  secret: "🎉 You found the hidden endpoint!",
  funFact: "The term 'DevOps' was coined in 2009 at a conference called 'DevOpsDays' in Ghent, Belgium. Before that, developers would 'throw code over the wall' to operations teams, leading to conflicts and delays. DevOps broke down that wall! 🧱➡️🤝",
  didYouKnow: "Modern DevOps includes 'DevSecOps' - security built into every step. That's exactly what you're learning in this tutorial!",
  hint: "💡 Keep this endpoint in mind - it will evolve as you progress through the tutorial..."
}));

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
