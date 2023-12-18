import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import {
  createOfferedCourseValidationSchema,
  updateOfferedCourseValidationSchema,
} from "./OfferedCourse.validation";
import {
  createOfferedCourse,
  deleteOfferedCourse,
  getAllOfferedCourses,
  getSingleOfferedCourses,
  updateOfferedCourse,
} from "./OfferedCourse.controller";

const router: Router = Router();

router.post(
  "/create-offered-course",
  validateRequest(createOfferedCourseValidationSchema),
  createOfferedCourse,
);

router.get("/", getAllOfferedCourses);

router.get("/:id", getSingleOfferedCourses);

router.patch(
  "/:id",
  validateRequest(updateOfferedCourseValidationSchema),
  updateOfferedCourse,
);

router.delete("/:id", deleteOfferedCourse);

export const offeredCourseRoutes = router;
