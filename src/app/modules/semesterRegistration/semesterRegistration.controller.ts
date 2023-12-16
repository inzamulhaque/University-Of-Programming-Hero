import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import {
  createSemesterRegistrationIntoDB,
  getAllSemesterRegistrationsFromDB,
  getSingleSemesterRegistrationsFromDB,
  updateSemesterRegistrationIntoDB,
} from "./semesterRegistration.service";

const createSemesterRegistration = catchAsync(
  async (req: Request, res: Response) => {
    const result = await createSemesterRegistrationIntoDB(req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Semester Registration is created successfully!",
      data: result,
    });
  },
);

const getAllSemesterRegistrations = catchAsync(
  async (req: Request, res: Response) => {
    const result = await getAllSemesterRegistrationsFromDB(req.query);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Semester Registration is retrieved successfully !",
      data: result,
    });
  },
);

const getSingleSemesterRegistration = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const result = await getSingleSemesterRegistrationsFromDB(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Semester Registration is retrieved successfully",
      data: result,
    });
  },
);

const updateSemesterRegistration = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await updateSemesterRegistrationIntoDB(id, req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Semester Registration is updated successfully",
      data: result,
    });
  },
);

export {
  createSemesterRegistration,
  getAllSemesterRegistrations,
  getSingleSemesterRegistration,
  updateSemesterRegistration,
};
