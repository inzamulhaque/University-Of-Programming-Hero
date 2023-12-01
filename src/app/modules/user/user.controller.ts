import { NextFunction, Request, Response } from "express";
// import StudentValidationSchema from '../student/student.validation';
import { createStudentIntoDB } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student: studentData } = req.body;

    // const zodParseData = StudentValidationSchema.parse(studentData);

    const result = await createStudentIntoDB(password, studentData);

    // res.status(201).json({
    //   success: true,
    //   message: "Student is created successfully",
    //   data: result,
    // });

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Student is created successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export { createStudent };
