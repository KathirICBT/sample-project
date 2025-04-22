import express from "express";

const router = express.Router();

//VIEW ALL STUDETS
router.get("/students", (req, res) => {
  res.send("View all students");
});
//ADD A NEW STUDENT
router.post("/students", (req, res) => {
  res.send("Add a new student");
});
//UPDATE A STUDENT
router.put("/students/:id", (req, res) => {
  res.send("Update a student");
});
//DELETE A STUDENT
router.delete("/students/:id", (req, res) => {
  res.send("Delete a student");
});

export default router;
