import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import {
  createSemesterRegistrationValidationSchema,
  upadateSemesterRegistrationValidationSchema,
} from "./semesterRegistration.validation";
import {
  createSemesterRegistration,
  getAllSemesterRegistrations,
  getSingleSemesterRegistration,
  updateSemesterRegistration,
} from "./semesterRegistration.controller";

const router: Router = Router();

router.post(
  "/create-semester-registration",
  validateRequest(createSemesterRegistrationValidationSchema),
  createSemesterRegistration,
);

router.patch(
  "/:id",
  validateRequest(upadateSemesterRegistrationValidationSchema),
  updateSemesterRegistration,
);

router.get("/:id", getSingleSemesterRegistration);

router.get("/", getAllSemesterRegistrations);

export const semesterRegistrationRoutes = router;
