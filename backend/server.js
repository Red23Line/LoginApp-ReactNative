
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({
  path: path.join(__dirname, ".env.local"),
});

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

const BASE_URL =
  "https://reqres.in/api/collections/tasks/records";

const API_KEY = process.env.REQRES_MANAGE_KEY;
const PROJECT_ID = process.env.REQRES_PROJECT_ID;
const ENVIRONMENT = process.env.REQRES_ENV || "prod";

// Memeriksa konfigurasi ReqRes
function checkConfig() {
  if (!API_KEY || !PROJECT_ID) {
    throw new Error("ReqRes configuration is missing.");
  }
}

// Membuat URL ReqRes
function getApiUrl() {
  return `${BASE_URL}?project_id=${encodeURIComponent(PROJECT_ID)}`;
}

// Membaca response JSON
async function readResponse(response) {
  const text = await response.text();

  try {
    return text ? JSON.parse(text) : {};
  } catch {
    return { message: text };
  }
}

// Health check
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "StudyMate API Server is running!",
  });
});

// GET: Mengambil semua tugas
app.get("/api/tasks", async (req, res) => {
  try {
    checkConfig();

    const response = await fetch(getApiUrl(), {
      method: "GET",
      headers: {
        "x-api-key": API_KEY,
        "X-Reqres-Env": ENVIRONMENT,
        Accept: "application/json",
      },
    });

    const result = await readResponse(response);

    return res.status(response.status).json(result);
  } catch (error) {
    console.error("GET tasks error:", error.message);

    return res.status(500).json({
      message: "Failed to retrieve tasks.",
    });
  }
});

// POST: Menambahkan tugas baru
app.post("/api/tasks", async (req, res) => {
  try {
    checkConfig();

    const {
      title,
      subject,
      deadline,
      completed = false,
      description,
    } = req.body;

    if (
      typeof title !== "string" ||
      !title.trim() ||
      typeof subject !== "string" ||
      !subject.trim() ||
      typeof deadline !== "string" ||
      !deadline.trim()
    ) {
      return res.status(400).json({
        message: "Title, subject, and deadline are required.",
      });
    }

    const response = await fetch(getApiUrl(), {
      method: "POST",
      headers: {
        "x-api-key": API_KEY,
        "X-Reqres-Env": ENVIRONMENT,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        data: {
          title: title.trim(),
          subject: subject.trim(),
          deadline: deadline.trim(),
          completed:
            completed === true || completed === "true"
              ? "true"
              : "false",
          ...(typeof description === "string" &&
          description.trim()
            ? { description: description.trim() }
            : {}),
        },
      }),
    });

    const result = await readResponse(response);

    return res.status(response.status).json(result);
  } catch (error) {
    console.error("POST tasks error:", error.message);

    return res.status(500).json({
      message: "Failed to create task.",
    });
  }
});

// Menjalankan server
app.listen(PORT, "0.0.0.0", () => {
  console.log("--------------------------------");
  console.log("StudyMate API Server is running!");
  console.log(`Local: http://localhost:${PORT}`);
  console.log("--------------------------------");
});