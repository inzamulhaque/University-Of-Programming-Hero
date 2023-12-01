import express from "express";
import { createStudent } from "./user.controller";
import validateRequest from "../../middlewares/validateRequest";
import { CreateStudentValidationSchema } from "../student/student.validation";

const router = express.Router();

router.post(
  "/create-student",
  validateRequest(CreateStudentValidationSchema),
  createStudent,
);

export const UserRoutes = router;
