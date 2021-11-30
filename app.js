const express = require("express");
const app = express();
const tasksRoute = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

// basic middlewares
app.use(express.json());

// routes
app.use("/api/v1/tasks", tasksRoute);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(process.env.PORT || 5000, () =>
      console.log(`Server is listening on port ${process.env.PORT}`),
    );
  } catch (error) {
    console.log(error);
  }
}; 

start();
