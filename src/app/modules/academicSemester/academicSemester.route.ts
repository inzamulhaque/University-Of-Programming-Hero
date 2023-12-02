import express from "express";
import {
  createAcademicSemester,
  getAllAcademicSemesters,
  getSingleAcademicSemester,
  updateAcademicSemester,
} from "./academicSemester.controller";
import validateRequest from "../../middlewares/validateRequest";
import {
  createAcdemicSemesterValidationSchema,
  updateAcademicSemesterValidationSchema,
} from "./academicSemester.validation";

const router = express.Router();

router.post(
  "/create-academic-semester",
  validateRequest(createAcdemicSemesterValidationSchema),
  createAcademicSemester,
);

router.get("/:semesterId", getSingleAcademicSemester);

router.patch(
  "/:semesterId",
  validateRequest(updateAcademicSemesterValidationSchema),
  updateAcademicSemester,
);

router.get("/", getAllAcademicSemesters);

export const AcademicSemesterRoutes = router;
