import express from "express";
import { createAcademicSemester } from "./academicSemester.controller";

const router = express.Router();

router.post("/create-academic-semester", createAcademicSemester);

export const AcademicSemesterRoutes = router;
