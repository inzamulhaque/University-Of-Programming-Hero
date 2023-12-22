import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { updateFacultyValidationSchema } from "./faculty.validation";
import {
  deleteFaculty,
  getAllFaculties,
  getSingleFaculty,
  updateFaculty,
} from "./faculty.controller";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../user/user.constant";

const router = express.Router();

router.get("/:id", getSingleFaculty);

router.patch(
  "/:id",
  validateRequest(updateFacultyValidationSchema),
  updateFaculty,
);

router.delete("/:id", deleteFaculty);

router.get("/", auth(USER_ROLE.admin, USER_ROLE.faculty), getAllFaculties);

export const FacultyRoutes = router;
