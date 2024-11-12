const express = require("express");
const connectDB = require("./config/db");
const bankRoutes = require("./routes/bankRoutes");
const transactionRoutes = require("./routes/transactionRoutes");
const walletRoutes = require("./routes/walletRoutes");
const expenseItemRoutes = require("./routes/expenseRoutes");
const voucherRoutes = require("./routes/voucherRoutes");
const ledgerRoutes = require("./routes/ledgerRoutes");
const websiteRoutes = require("./routes/websiteRoutes");
const serviceBranchRoutes = require("./routes/serviceBranchRoutes");
const serviceCategoryRoutes = require("./routes/serviceCategoryRoutes");
// const serviceRoutes = require("./routes/serviceRoutes");
const accountHeadRoutes = require("./routes/accountHeadRoutes");









const app = express();
const PORT = process.env.PORT || 2000;

// Connect to the database
connectDB();

// Middleware for JSON parsing
app.use(express.json());



// Routes
app.use("/api/banks", bankRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/wallets", walletRoutes);
app.use("/api/expense-items", expenseItemRoutes);


app.use("/api/vouchers", voucherRoutes);
app.use("/api", ledgerRoutes); // MASTER
app.use("/api/accountHeads", accountHeadRoutes);

app.use("/api", websiteRoutes);// MASTER  add website
app.use("/api", serviceBranchRoutes); // MASTER SERVICE BRANCH
app.use("/api", serviceCategoryRoutes); // MASTER SERVICE CATEGORY
// app.use("/api/services", serviceRoutes);   // MASTER 









// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
