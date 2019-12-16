const express = require("express");

const wordFrequencyRoutes = require("./routes/wordFrequency");
const app = express();
// enabling cors for local development
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET , POST , PUT , PATCH , DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type , Authorization");
  next();
});
app.use("/wordFrequency", wordFrequencyRoutes);
app.use((error, req, res, next) => {
  console.log(`error ${error}`);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});
app.listen(8080);
