import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { updateFacultyValidationSchema } from "./faculty.validation";
import {
  deleteFaculty,
  getAllFaculties,
  getSingleFaculty,
  updateFaculty,
} from "./faculty.controller";

const router = express.Router();

router.get("/:id", getSingleFaculty);

router.patch(
  "/:id",
  validateRequest(updateFacultyValidationSchema),
  updateFaculty,
);

router.delete("/:id", deleteFaculty);

router.get("/", getAllFaculties);

export const FacultyRoutes = router;
