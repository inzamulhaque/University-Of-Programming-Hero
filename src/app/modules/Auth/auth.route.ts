import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import {
  changePasswordValidationSchema,
  loginValidationSchema,
  refreshTokenValidationSchema,
} from "./auth.validation";
import { changePassword, loginUser, refreshToken } from "./auth.controller";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../user/user.constant";

const router: Router = Router();

router.post("/login", validateRequest(loginValidationSchema), loginUser);

router.post(
  "/change-password",
  auth(USER_ROLE.admin, USER_ROLE.faculty, USER_ROLE.student),
  validateRequest(changePasswordValidationSchema),
  changePassword,
);

router.post(
  "/refresh-token",
  validateRequest(refreshTokenValidationSchema),
  refreshToken,
);

export const AuthRoutes = router;
