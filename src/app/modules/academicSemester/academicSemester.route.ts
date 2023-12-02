import express from "express";
import { createAcademicSemester } from "./academicSemester.controller";
import validateRequest from "../../middlewares/validateRequest";
import { createAcdemicSemesterValidationSchema } from "./academicSemester.validation";

const router = express.Router();

router.post(
  "/create-academic-semester",
  validateRequest(createAcdemicSemesterValidationSchema),
  createAcademicSemester,
);

export const AcademicSemesterRoutes = router;
