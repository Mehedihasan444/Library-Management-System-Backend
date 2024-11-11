import { catchAsync } from "../../utils/cacheAsync";
import { sendResponse } from "../../utils/sendResponse";
import { memberService } from "./member.service";

const createMember = catchAsync(async (req, res) => {
  const member = await memberService.createMember(req.body);
  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "Member created successfully",
    data: member,
  });
});
const getMembers = catchAsync(async (req, res) => {
  const members = await memberService.getMembers();
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Members retrieved successfully",
    data: members,
  });
});
const getMember = catchAsync(async (req, res) => {
  const { memberId } = req.params;
  const members = await memberService.getMember(memberId);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Member retrieved successfully",
    data: members,
  });
});
const updateMember = catchAsync(async (req, res) => {
  const { memberId } = req.params;
  const memberInfo = req.body;
  const member = await memberService.updateMember(memberId, memberInfo);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Member updated successfully",
    data: member,
  });
});
const deleteMember = catchAsync(async (req, res) => {
  const { memberId } = req.params;
  const member = await memberService.deleteMember(memberId);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Member successfully deleted",
  });
});

export const memberController = {
  createMember,
  getMembers,
  getMember,
  updateMember,
  deleteMember,
};
