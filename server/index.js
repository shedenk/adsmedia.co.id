import express from "express";
import sqlite3 from "sqlite3";
import cors from "cors";
import dotenv from "dotenv";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import fs from "fs";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.API_PORT || 3005;
const DB_PATH = join(__dirname, "database.sqlite");

// Middleware
app.use(cors());
app.use(express.json());

// Auth Middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  
  const serverToken = process.env.API_BEARER_TOKEN;

  if (serverToken && token !== serverToken) {
    return res.status(403).json({ error: "Forbidden: Invalid token." });
  }

  // If no server token is configured, or token matches, proceed
  next();
};

// Database Initialization
const db = new sqlite3.Database(DB_PATH, (err) => {
  if (err) {
    console.error("Error opening database " + err.message);
  } else {
    // Create posts table if it doesn't exist
    db.run(
      `CREATE TABLE IF NOT EXISTS posts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        slug TEXT NOT NULL UNIQUE,
        content TEXT NOT NULL,
        excerpt TEXT,
        cover_image TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )`,
      (err) => {
        if (err) {
          console.error("Error creating table " + err.message);
        } else {
          console.log("Database and 'posts' table ready.");
        }
      }
    );
  }
});

// --- API ROUTES ---

// Get all posts (public)
app.get("/api/posts", (req, res) => {
  db.all("SELECT * FROM posts ORDER BY created_at DESC", [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// Get single post by slug (public)
app.get("/api/posts/:slug", (req, res) => {
  const slug = req.params.slug;
  db.get("SELECT * FROM posts WHERE slug = ?", [slug], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!row) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.json(row);
  });
});

// Create post (protected)
app.post("/api/posts", authenticateToken, (req, res) => {
  const { title, slug, content, excerpt, cover_image } = req.body;
  if (!title || !slug || !content) {
    return res.status(400).json({ error: "Title, slug, and content are required." });
  }

  const query = `INSERT INTO posts (title, slug, content, excerpt, cover_image) VALUES (?, ?, ?, ?, ?)`;
  db.run(query, [title, slug, content, excerpt, cover_image], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: this.lastID });
  });
});

// Update post (protected)
app.put("/api/posts/:id", authenticateToken, (req, res) => {
  const id = req.params.id;
  const { title, slug, content, excerpt, cover_image } = req.body;
  
  if (!title || !slug || !content) {
    return res.status(400).json({ error: "Title, slug, and content are required." });
  }

  const query = `UPDATE posts SET title = ?, slug = ?, content = ?, excerpt = ?, cover_image = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?`;
  db.run(query, [title, slug, content, excerpt, cover_image, id], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: "Post not found." });
    }
    res.json({ message: "Post updated successfully." });
  });
});

// Delete post (protected)
app.delete("/api/posts/:id", authenticateToken, (req, res) => {
  const id = req.params.id;
  const query = `DELETE FROM posts WHERE id = ?`;
  db.run(query, [id], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: "Post not found." });
    }
    res.json({ message: "Post deleted successfully." });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
