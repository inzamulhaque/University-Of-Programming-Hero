import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import {
  deleteAdminFromDB,
  getAllAdminsFromDB,
  getSingleAdminFromDB,
  updateAdminIntoDB,
} from "./admin.service";

const getSingleAdmin = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await getSingleAdminFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Admin is retrieved succesfully",
    data: result,
  });
});

const getAllAdmins = catchAsync(async (req, res) => {
  const result = await getAllAdminsFromDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Admins are retrieved succesfully",
    data: result,
  });
});

const updateAdmin = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { admin } = req.body;
  const result = await updateAdminIntoDB(id, admin);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Admin is updated succesfully",
    data: result,
  });
});

const deleteAdmin = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await deleteAdminFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Admin is deleted succesfully",
    data: result,
  });
});

export { getAllAdmins, getSingleAdmin, deleteAdmin, updateAdmin };
