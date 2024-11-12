"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberController = void 0;
const cacheAsync_1 = require("../../utils/cacheAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const member_service_1 = require("./member.service");
const createMember = (0, cacheAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const member = yield member_service_1.memberService.createMember(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 201,
        message: "Member created successfully",
        data: member,
    });
}));
const getMembers = (0, cacheAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const members = yield member_service_1.memberService.getMembers();
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        message: "Members retrieved successfully",
        data: members,
    });
}));
const getMember = (0, cacheAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { memberId } = req.params;
    const members = yield member_service_1.memberService.getMember(memberId);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        message: "Member retrieved successfully",
        data: members,
    });
}));
const updateMember = (0, cacheAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { memberId } = req.params;
    const memberInfo = req.body;
    const member = yield member_service_1.memberService.updateMember(memberId, memberInfo);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        message: "Member updated successfully",
        data: member,
    });
}));
const deleteMember = (0, cacheAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { memberId } = req.params;
    const member = yield member_service_1.memberService.deleteMember(memberId);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        message: "Member successfully deleted",
    });
}));
exports.memberController = {
    createMember,
    getMembers,
    getMember,
    updateMember,
    deleteMember,
};
