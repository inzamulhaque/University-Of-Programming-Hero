import {
  deleteStudentFromDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
} from "./student.service";
import httpStatus from "http-status";
import sendResponse from "../../utils/sendResponse";
import catchAsync from "../../utils/catchAsync";

const getAllStudents = catchAsync(async (req, res) => {
  const result = await getAllStudentsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Student are retrieved successfully",
    data: result,
  });
});

const getSingleStuden = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await getSingleStudentFromDB(studentId);
  // res.status(200).json({
  //   success: true,
  //   message: "Student is retrieved successfully",
  //   data: result,
  // });

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Student is retrieved successfully",
    data: result,
  });
});

const deleteStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await deleteStudentFromDB(studentId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Student deleted successfully",
    data: result,
  });
});

export { getAllStudents, getSingleStuden, deleteStudent };
