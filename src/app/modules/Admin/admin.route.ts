import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import {
  deleteAdmin,
  getAllAdmins,
  getSingleAdmin,
  updateAdmin,
} from "./admin.controller";
import { updateAdminValidationSchema } from "./admin.validation";

const router = express.Router();

router.get("/", getAllAdmins);

router.get("/:id", getSingleAdmin);

router.patch("/:id", validateRequest(updateAdminValidationSchema), updateAdmin);

router.delete("/:adminId", deleteAdmin);

export const AdminRoutes = router;
