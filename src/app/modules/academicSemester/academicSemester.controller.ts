import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { createAcademicSemesterIntoDB } from "./academicSemester.service";

const createAcademicSemester = catchAsync(async (req, res) => {
  const result = await createAcademicSemesterIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Academic semester is created succesfully",
    data: result,
  });
});

export { createAcademicSemester };
