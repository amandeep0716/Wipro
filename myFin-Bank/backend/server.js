const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const authRoutes = require("./routes/authRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const accountRoutes = require("./routes/accountRoutes");
const transactionRoutes = require("./routes/transactionRoutes");
const loanRoutes = require("./routes/loanRoutes");
const adminLoanRoutes = require("./routes/adminLoanRoutes");
const profileRoutes = require("./routes/profileRoutes");
const adminRoutes = require("./routes/adminRoutes");
const notificationRoutes =require("./routes/notificationRoutes");
const chatRoutes =
  require(
    "./routes/chatRoutes"
  );

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.send("🚀 MyFin Bank API Running");
});

// ======================
// Routes
// ======================

app.use("/api/auth", authRoutes);

app.use(
  "/api/dashboard",
  dashboardRoutes
);

app.use(
  "/api/account",
  accountRoutes
);

app.use(
  "/api/transactions",
  transactionRoutes
);

app.use(
  "/api/loans",
  loanRoutes
);

app.use(
  "/api/admin",
  adminRoutes
);

app.use(
  "/api/profile",
  profileRoutes
);

app.use(
  "/api/notifications",
  notificationRoutes
);

app.use(
  "/api/chat",
  chatRoutes
);

app.use(
  "/api/fd",
  require("./routes/fdRoutes")
);

app.use(
  "/api/rd",
  require("./routes/rdRoutes")
);

app.use("/api/admin-loans",adminLoanRoutes);

// ======================
// MongoDB Connection
// ======================

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log(
      "✅ MongoDB Connected"
    );
  })
  .catch((error) => {
    console.error(
      "❌ MongoDB Connection Error:",
      error
    );
  });

// ======================
// Server Start
// ======================

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `🚀 Server running on port ${PORT}`
  );
});