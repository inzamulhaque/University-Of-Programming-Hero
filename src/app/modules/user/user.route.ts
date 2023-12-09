import express from "express";
import { createFaculty, createStudent } from "./user.controller";
import validateRequest from "../../middlewares/validateRequest";
import { CreateStudentValidationSchema } from "../student/student.validation";
import { createFacultyValidationSchema } from "../Faculty/faculty.validation";

const router = express.Router();

router.post(
  "/create-student",
  validateRequest(CreateStudentValidationSchema),
  createStudent,
);

router.post(
  "/create-faculty",
  validateRequest(createFacultyValidationSchema),
  createFaculty,
);

export const UserRoutes = router;
