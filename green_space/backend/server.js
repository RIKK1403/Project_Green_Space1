const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ROUTE GET UTAMA
app.get("/", (req, res) => {
  res.json({ message: "Server berjalan" });
});

// ROUTE LOGIN
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "12345") {
    return res.json({
      success: true,
      message: "Login berhasil",
      token: "fake_token_123"
    });
  }

  res.status(401).json({
    success: false,
    message: "Username atau password salah"
  });
});

// JALANKAN SERVER
app.listen(3000, () => {
  console.log("Server berjalan di port 3000");
});
