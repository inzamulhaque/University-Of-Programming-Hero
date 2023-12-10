import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import {
  createCourseValidationSchema,
  facultiesWithCourseValidationSchema,
  updateCourseValidationSchema,
} from "./course.validation";
import {
  assignFacultiesWithCourse,
  createCourse,
  deleteCourse,
  getAllCourses,
  getSingleCourse,
  removeFacultiesFromCourse,
  updateCourse,
} from "./course.controller";

const router = express.Router();

router.post(
  "/create-course",
  validateRequest(createCourseValidationSchema),
  createCourse,
);

router.get("/:id", getSingleCourse);

router.patch(
  "/:id",
  validateRequest(updateCourseValidationSchema),
  updateCourse,
);

router.delete("/:id", deleteCourse);

router.put(
  "/:courseId/assign-faculties",
  validateRequest(facultiesWithCourseValidationSchema),
  assignFacultiesWithCourse,
);

router.delete(
  "/:courseId/remove-faculties",
  validateRequest(facultiesWithCourseValidationSchema),
  removeFacultiesFromCourse,
);

router.get("/", getAllCourses);

export const CourseRoutes = router;
