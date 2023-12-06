import express from "express";
import {
  deleteStudent,
  getAllStudents,
  getSingleStuden,
  updateStudent,
} from "./student.controller";
import { updateStudentValidationSchema } from "./student.validation";
import validateRequest from "../../middlewares/validateRequest";

const router = express.Router();

router.get("/", getAllStudents);

router.get("/:studentId", getSingleStuden);

router.patch(
  "/:studentId",
  validateRequest(updateStudentValidationSchema),
  updateStudent,
);

// router.post('/create-student', createStudent);

router.delete("/:studentId", deleteStudent);

export const StudentRoutes = router;
