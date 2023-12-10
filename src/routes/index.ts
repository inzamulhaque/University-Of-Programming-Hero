import { Router } from "express";
import { UserRoutes } from "../app/modules/user/user.route";
import { StudentRoutes } from "../app/modules/student/student.route";
import { AcademicSemesterRoutes } from "../app/modules/academicSemester/academicSemester.route";
import { AcademicFacultyRoutes } from "../app/modules/academicFaculty/academicFaculty.route";
import { AcademicDepartmentRoutes } from "../app/modules/academicDepartment/academicDepartment.route";
import { FacultyRoutes } from "../app/modules/Faculty/faculty.route";
import { AdminRoutes } from "../app/modules/Admin/admin.route";
import { CourseRoutes } from "../app/modules/Course/course.route";

const router = Router();

const moduleRouters = [
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/students",
    route: StudentRoutes,
  },
  {
    path: "/academic-semesters",
    route: AcademicSemesterRoutes,
  },
  {
    path: "/academic-faculties",
    route: AcademicFacultyRoutes,
  },
  {
    path: "/academic-departments",
    route: AcademicDepartmentRoutes,
  },
  {
    path: "/faculties",
    route: FacultyRoutes,
  },
  {
    path: "/admins",
    route: AdminRoutes,
  },
  {
    path: "/courses",
    route: CourseRoutes,
  },
];

moduleRouters.forEach((route) => router.use(route.path, route.route));

export default router;
