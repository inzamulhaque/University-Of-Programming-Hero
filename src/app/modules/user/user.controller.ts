// import StudentValidationSchema from '../student/student.validation';
import { createStudentIntoDB } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";

const createStudent = catchAsync(async (req, res) => {
  const { password, student: studentData } = req.body;

  // const zodParseData = StudentValidationSchema.parse(studentData);

  const result = await createStudentIntoDB(password, studentData);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Student is created successfully",
    data: result,
  });
});

export { createStudent };
