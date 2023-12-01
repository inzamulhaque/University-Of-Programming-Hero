import { NextFunction, Request, Response } from "express";
import {
  deleteStudentFromDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
} from "./student.service";
import httpStatus from "http-status";
import sendResponse from "../../utils/sendResponse";

const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await getAllStudentsFromDB();

    // res.status(200).json({
    //   success: true,
    //   message: "Student are retrieved successfully",
    //   data: result,
    // });
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Student are retrieved successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getSingleStuden = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
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
  } catch (err) {
    next(err);
  }
};

const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params;
    const result = await deleteStudentFromDB(studentId);

    // res.status(200).json({
    //   success: true,
    //   message: "Student deleted successfully",
    //   data: result,
    // });

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Student deleted successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export { getAllStudents, getSingleStuden, deleteStudent };
