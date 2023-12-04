import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import {
  createAcademicDepartmemt,
  getAllAcademicDepartments,
  getSingleAcademicDepartment,
  updateAcademicDeartment,
} from "./academicDepartment.controller";
import {
  createAcademicDepartmentValidationSchema,
  updateAcademicDepartmentValidationSchema,
} from "./academicDepartment.validation";

const router = express.Router();

router.post(
  "/create-academic-department",
  validateRequest(createAcademicDepartmentValidationSchema),
  createAcademicDepartmemt,
);

router.get("/:departmentId", getSingleAcademicDepartment);

router.patch(
  "/:departmentId",
  validateRequest(updateAcademicDepartmentValidationSchema),
  updateAcademicDeartment,
);

router.get("/", getAllAcademicDepartments);

export const AcademicDepartmentRoutes = router;
