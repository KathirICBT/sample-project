import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ msg: "Hello World!" });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`The project run at http://localhost:${PORT}`);
});
