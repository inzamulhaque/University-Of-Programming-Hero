import express from "express";
import { createAdmin, createFaculty, createStudent } from "./user.controller";
import validateRequest from "../../middlewares/validateRequest";
import { CreateStudentValidationSchema } from "../student/student.validation";
import { createFacultyValidationSchema } from "../Faculty/faculty.validation";
import { createAdminValidationSchema } from "../Admin/admin.validation";

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

router.post(
  "/create-admin",
  validateRequest(createAdminValidationSchema),
  createAdmin,
);

export const UserRoutes = router;
