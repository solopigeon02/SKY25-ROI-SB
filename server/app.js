const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;
// To be commented
/* const corsOptions = {
  origin: "http://localhost:8081", // your frontend
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}; */

// app.use(cors(corsOptions)); // To be commented

app.use(express.json());
app.use(cors()); // to be uncommented at home

const departmentRoutes = require("./routes/department");
const peopleRoutes = require("./routes/people");

app.use("/api/departments", departmentRoutes);
app.use("/api/people", peopleRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
