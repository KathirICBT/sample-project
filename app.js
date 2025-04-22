import express from "express";
import studetRoutes from "./routes/student.route.js";

const app = express();

app.get("/", (req, res) => {
  res.json({ msg: "Hello World!" });
});

//CRUD APPLICATION

//MIDDLEWARE
app.use("/students", studetRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`The project run at http://localhost:${PORT}`);
});
