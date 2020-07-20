const express = require("express");
const connectDb = require("./config/db");
const userRoutes = require("./routes/api/users");
const categoryRoutes = require("./routes/api/categories");
const postRoutes = require("./routes/api/posts");
const authRoutes = require("./routes/api/auth");
const tradeRoutes = require("./routes/api/trade");
const app = express();
const path = require("path");
//middleware
app.use(express.json({ extended: false }));

//connecting DB
connectDb();

app.use("/api/users", userRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/trade", tradeRoutes);

//Serve Static assests in prod
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//PORT
const PORT = process.env.PORT || 5000;

//Server Start
app.listen(PORT, () => {
  console.log("Server Started");
});
