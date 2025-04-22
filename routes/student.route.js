import express from "express";
import {
  createStudent,
  deleteStudent,
  studentIndex,
  updateStudent,
} from "../controllers/students.controller.js";

const router = express.Router();

//VIEW ALL STUDETS
router.get("/", studentIndex);
//ADD A NEW STUDENT
router.post("/", createStudent);
//UPDATE A STUDENT
router.put("/:id", updateStudent);
//DELETE A STUDENT
router.delete("/:id", deleteStudent);

export default router;
